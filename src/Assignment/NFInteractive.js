import React, {Component} from 'react';

// import parseOptionsString from '../../js/parseOptionsString';

class ContentNFInteractive extends Component{
    constructor(props){
        super(props);

        this.state = {answer: null};
        this.setAnswer = this.setAnswer.bind(this);
    }

    componentSetup(){
        const {params} = this.props
        this.params = params
        this.assignemntScore = params.assignment;
        this.answerScore = params.answer;

        // this.contentparams
        this.NFClient = window.NFClient;


        this.viewParams = {}
        this.options = {};

        this.options.assignment = {
            viewParams: {
                scale: 1,
                role: "template",
                displayMode: "paginated"
            }
        }
        
        this.options.answer = {
            height: 1,
            width: 1,
            viewParams: {
                scale: 0.1,
                role: "reader",
                displayMode: "paginated",
            }
        }

        this.assignmentScoreCode = this.parseNFUrl(params.assignment)
        this.answerScoreCode = this.parseNFUrl(params.answer)
    }

    parseNFUrl(url){
        let splitUrl = url.split("/")
        return splitUrl[splitUrl.length - 1];
    }

    setAnswer(answerData){
        console.log(answerData)
        this.setState({
            answerData
        })
    }

    shouldComponentupdate(){
        return false
    }

    parseXML(assignmentXML, parser){
        let parsedData = parser.parseFromString(assignmentXML, "text/xml");
        parsedData = parsedData.getElementsByTagName("part")[0].getElementsByTagName("measure");
        return parsedData
    }

    checkXML(assignmentXML, answerData, assignmentScore){
        for(let i = 0; i < answerData.length; i++){
            if(answerData[i].innerHTML.toLowerCase() !== assignmentXML[i].innerHTML.toLowerCase()){
              assignmentScore.selectMeasures(i, i+1);
              return
            } 
          }
          document.getElementById(`nf-interactive-${this.content.id}`).classList.add("nf-interactive-passed");     
          this.props.stateMethods.increasePassedInteractiveCount()
    }

    parseJSON(assignmentJSON){
        let currentMeasure = -1;
        let passed = [];
        const traverseAnswers = (answerData, assignmentData, currentKey = 'staves') => {

            if(passed.length) return
            // if the passed in answerData is itself a string, number, etc. 
            // Check for equality with assignment and deterine grade
            if(typeof answerData !== 'object'){
                if(answerData !== assignmentData){
                    console.log("FAILED");
                    passed.push([currentMeasure, false]);
                    return                    
                } else {
                    return
                }
            }

            if(typeof answerData[currentKey] !== 'object'){ 
                if(!assignmentData || answerData[currentKey] !== assignmentData[currentKey]){
                    console.log("FAILED");
                    passed.push([currentMeasure, false]);
                    return
                }
            }
            
            for(let newKey in answerData[currentKey]){
                if(newKey === "noteSets") currentMeasure++;
                if(answerData && assignmentData){
                    traverseAnswers(answerData[currentKey], assignmentData[currentKey], newKey);
                }
            }
        }

        let answerJSON = this.state.answerData
        traverseAnswers(answerJSON, assignmentJSON)
        return passed 
      }
  
      checkJSON(assignmentJSON, assignmentScore){
        // parse and grade the assignmentJSON  
        let graded = this.parseJSON(assignmentJSON);
            // the graded array will only contain measures that are incorrect
            // take the first measure that has an error, and select it in th assignment score
            if(graded.length > 0){
                assignmentScore.selectMeasures(graded[0][0], graded[0][0] + 1);
            } else {
                document.getElementById(`nf-interactive-${this.content.id}`).classList.add("nf-interactive-passed");
                this.props.stateMethods.increasePassedInteractiveCount()
            }
        
      }


    STOPcomponentDidMount(){

        // create the assignment and answer score iframes via the noteflight api
        const assignment = new this.NFClient.ScoreView(`assignment-${this.content.id}`, this.assignmentScoreCode, this.options.assignment);
        const answer = new this.NFClient.ScoreView(`answer-${this.content.id}`, this.answerScoreCode, this.options.answer);
        // get the newly created iframe objects for later use
        const assignmentFrame = document.getElementById(`assignment-${this.content.id}`)
        const answerFrame = document.getElementById(`answer-${this.content.id}`)

        // interactive buttons
        const checkWorkButton = document.getElementById(`check-work-${this.content.id}`);
        const playAnswerButton = document.getElementById(`play-answer-${this.content.id}`);
        const activateButtons = () => {
            checkWorkButton.innerHTML = "Check Your Work"
            checkWorkButton.disabled = false;
            if(playAnswerButton){
                playAnswerButton.innerHTML = "Play Dictation Excerpt";
                playAnswerButton.disabled = false;
            }
        }
        // add class names here
        assignmentFrame.className = "score-container nf-assignment-score nf-interactive"
        answerFrame.className = "score-container nf-answer-score nf-interactive"
        
        // declar a new DOMParser to use to check assignment vs answer scores
        let parser = new DOMParser();

        // using the iframe objects from earlier, set their onload method to get the score data from each individual score
        assignmentFrame.onload = () => {
            console.log("assignment Loaded")
            assignment.addEventListener("scoreDataLoaded", () => {
                console.log("assignment FRAME READY FOR INTERACTION")
            })
        }
        
        // ANSWER: When answer data loads, get and parse its musicXML and store it in the component state
        answerFrame.onload = () => {
            console.log("Answer Loaded")
            answer.addEventListener("scoreDataLoaded", () => {
                if(this.contentOptions.gradingMethod === "simple"){
                    console.log("ANSWER FRAME READY FOR INTERACTION")
                    // if simple grading method, load score data as json like object (only checkes pitches & durations)
                    answer.getScore().done(data => {
                        let answerData = data;
                        this.setAnswer(answerData)
                        activateButtons();
                    })
                } else {
                    // if detailed grading method, load score data as musicXML (checks for perfect match)
                    answer.getNoteflightXML().done(data => {
                        let answerData = this.parseXML(data, parser)
                        this.setAnswer(answerData)
                        checkWorkButton.disabled = false;
                        activateButtons();
                        // delete answer iframe after its data has been saved to the component state?
                    })
                }
            })
        }

        // get the button element that the user presses to check their work
        // when clicked, it should check the current assignment score data against the stored answer score data
        checkWorkButton.onclick = (e) => {
            if(this.contentOptions.gradingMethod === "simple"){
                assignment.getScore().done(data => {
                    this.checkJSON(data, assignment)
                })
            } else {
                assignment.getNoteflightXML().done(data => {
                    let assignmentXML = this.parseXML(data, parser);
                    let answerData = this.state.answerData
                    // console.log({answerData, assignmentXML})
                    this.checkXML(assignmentXML, answerData, assignment)
                })
            }
        }

        // If assingmentType is a dictation, we need to allow for the user to play the dictation example
        if(this.contentOptions.assignmentType === "dictation"){
            playAnswerButton.onclick = (e) => {
                answer.playFromSelection(0);
            }
        }
    }



    render(){
        // calling the constructor in the render method allows us to reset the variables designated in the original constructor call 
        // this way when anything is that would effect the component, we can update just those parts without having to remount the entire component.
        // this.constructor(this.props, this.state)
        this.componentSetup();
        return (
            <div id="nf-interactive">
                {
                    this.params.type === "dictation" 
                    &&
                    <button id={`play-answer`} disabled>Loading Dictation...</button>
                }
                <br/>
                {/* this div element below will be replaceed by a noteflight embeded score */}
                <div id={this.assignmentScoreCode}></div>
                <div id={this.answerScoreCode}></div>
                <br/>
                <button id={`check-work`} disabled>Loading assignment...</button>

            </div>
        )
    }
} 
    
    


export default ContentNFInteractive;