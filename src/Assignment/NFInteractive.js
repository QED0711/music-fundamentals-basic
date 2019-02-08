import React, {Component} from 'react';

import convert from 'xml-js';
import generateComparisonQueue from '../js/queueHelper';

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
        // TEMPORARY
        this.params.gradingMethod = "simple";

        this.assignemntScore = params.assignment;
        this.answerScore = params.answer;

        this.NFClient = window.NFClient;


        this.viewParams = {}
        this.options = {};

        this.options.assignment = {
            viewParams: {
                scale: 1,
                role: "template",
                displayMode: "paginated",
                playback: "silent"
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

   
  
      checkJSON(assignmentJSON, assignmentScore){
        // parse and grade the assignmentJSON  
        let graded = this.parseJSON(assignmentJSON);
            // the graded array will only contain measures that are incorrect
            // take the first measure that has an error, and select it in th assignment score
            if(graded.length > 0){
                assignmentScore.selectMeasures(graded[0][0], graded[0][0] + 1);
            } else {
                document.getElementById(`nf-interactive`).classList.add("nf-interactive-passed");
                window.alert("You Passed!!!")
            }
        
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

    //   NF-XML

    compareMeasures(measureSet){
        let assignmentData = measureSet[0];
        let answerData = measureSet[1];
       
        let mismatch = false

        const traverseMeasureObject = (assignment, answer, currentKey = "measure") => {

            // if the assignment does not even have the currentKey, return an error
            if(!assignment[currentKey]){
                mismatch = true;
                return "ERROR"
            }
            
            // if the assignment and answer both have a value (not at the currentKey), but they do not match
            // return an error
            if(typeof answer !== 'object'){
                if(assignment !== answer){
                    mismatch = true;
                    return "ERROR"
                } else {
                    return
                }
            }
            
            // if both have a value at the currentKey, but they don't match
            // return an error
            if(typeof answer[currentKey] !== 'object'){
                if(!assignment || answer[currentKey] !== assignment[currentKey]){
                    mismatch = true;
                    return "ERROR"
                }
            }

            for(let newKey in answer[currentKey]){
                if(assignment && answer){
                    traverseMeasureObject(assignment[currentKey], answer[currentKey], newKey)
                }
            }
        }

        traverseMeasureObject(assignmentData, answerData)
        return mismatch
    }

    measureErrors(assignmentQueue, answerQueue){
        let comparisonQueue = generateComparisonQueue(assignmentQueue, answerQueue);
        let errorList = []
        for(let i = 0; i < comparisonQueue.length; i++){
            let error = this.compareMeasures(comparisonQueue[i]);
            if(error) errorList.push(i)
        }
        // a set of measures in order where an error occured
        return errorList;
    }

    componentDidMount(){

        // create the assignment and answer score iframes via the noteflight api
        const assignment = new this.NFClient.ScoreView(this.assignmentScoreCode, this.assignmentScoreCode, this.options.assignment);
        const answer = new this.NFClient.ScoreView(this.answerScoreCode, this.answerScoreCode, this.options.answer);
        // get the newly created iframe objects for later use
        const assignmentFrame = document.getElementById(this.assignmentScoreCode);
        const answerFrame = document.getElementById(this.answerScoreCode);

        // interactive buttons
        const checkWorkButton = document.getElementById('check-work');
        const playAnswerButton = document.getElementById('play-answer');
      
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
                console.log("ASSIGNMENT FRAME READY FOR INTERACTION")
            })
        }
        
        // ANSWER: When answer data loads, get and parse its musicXML and store it in the component state
        answerFrame.onload = () => {
            console.log("Answer Loaded")
            answer.addEventListener("scoreDataLoaded", () => {
                // if detailed grading method, load score data as musicXML (checks for perfect match)
                answer.getNoteflightXML().done(data => {
                    let dataXML = parser.parseFromString(data, "text/xml");
                    let staves = [...dataXML.getElementsByTagName("staff")].filter((x, i) => i > 0)
                    
                    let answerMeasureQueue = []; // generates an array where measures are queued in the correct order (top down each system)
                    for(let i = 0; i < staves[0].children.length; i++){
                        for(let j = 0; j < staves.length; j++){
                            answerMeasureQueue.push(staves[j].children[i])
                        }
                    }

                    this.setAnswer(answerMeasureQueue)
                    checkWorkButton.disabled = false;
                    activateButtons();
                    // delete answer iframe after its data has been saved to the component state?
                })
            })
        }

        // get the button element that the user presses to check their work
        // when clicked, it should check the current assignment score data against the stored answer score data
        checkWorkButton.onclick = (e) => {

            assignment.getNoteflightXML().done(data => {
                let assignmentXML = parser.parseFromString(data, "text/xml");
                let staves = [...assignmentXML.getElementsByTagName("staff")].filter((x, i) => i > 0)
                
                let measureQueue = []; // generates an array where measures are queued in the correct order (top down each system)
                for(let i = 0; i < staves[0].children.length; i++){
                    for(let j = 0; j < staves.length; j++){
                        measureQueue.push(staves[j].children[i])
                    }
                }

                let errors = this.measureErrors(measureQueue, this.state.answerData, parser)
                // assignment.selectRange(1,0,2,0, [0])
                if(errors.length){
                    let errorIndex = errors[0]
                    let staffCount = staves.length
                    let measure = (Math.floor(errorIndex / staffCount))
                    assignment.selectRange(
                        measure, // start of measure
                        0, // start offset 
                        measure + 1, // start of following measure
                        0, // end offset
                        [errorIndex % staffCount]
                    )
                } else {
                    window.alert("You Passed!!!")
                }
            })

            // if(this.params.gradingMethod === "simple"){
            //     assignment.getScore().done(data => {
            //         this.checkJSON(data, assignment)
            //     })
            // } else {
            //     assignment.getNoteflightXML().done(data => {
            //         let assignmentXML = this.parseXML(data, parser);
            //         let answerData = this.state.answerData
            //         // console.log({answerData, assignmentXML})
            //         this.checkXML(assignmentXML, answerData, assignment)
            //     })
            // }
        }

        // If assingmentType is a dictation, we need to allow for the user to play the dictation example
        if(this.params.type === "dictation"){
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