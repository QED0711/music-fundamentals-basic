import React, {Component} from 'react';
import {MDBIcon} from 'mdbreact'

// import convert from 'xml-js';
import generateComparisonQueue from '../js/queueHelper';
import ignoreKeys from '../js/ignoreKeys';

// import parseOptionsString from '../../js/parseOptionsString';

class ContentNFInteractive extends Component{
    constructor(props){
        super(props);

        this.state = {
            answer: null, 
            title: null,
            staffCount: 0,
            errors: [],
            currentErrorIndex: 0,
            assignmentScore: null,
            answerScore: null,
            currentPlayCount: 0,
        };
        this.setAnswer = this.setAnswer.bind(this);
        this.setStaffCount = this.setStaffCount.bind(this);
        this.setErrors = this.setErrors.bind(this);
        this.setScores = this.setScores.bind(this);
        this.increaseErrorIndex = this.increaseErrorIndex.bind(this);
        this.decreaseErrorindex = this.decreaseErrorindex.bind(this);
        this.resetErrorIndex = this.resetErrorIndex.bind(this);
        this.increaseCurrentPlayCount = this.increaseCurrentPlayCount.bind(this);
    }

    componentSetup(){
        const {params} = this.props
        this.params = params
        this.assignmentScore = params.assignment;
        this.answerScore = params.answer;

        this.NFClient = window.NFClient;

        for(let key of params.checkFor){
            ignoreKeys[key] = false;
        }

        this.assignmentScoreCode = this.parseNFUrl(params.assignment).scoreCode
        this.answerScoreCode = this.parseNFUrl(params.answer).scoreCode
        
        const assignmentHost = this.parseNFUrl(params.assignment).host
        const answerHost = this.parseNFUrl(params.answer).host
        
        this.options = {};

        this.options.assignment = {
            width: "100%",
            hieght: "100%",
            host: assignmentHost,
            viewParams: {
                scale: 1.5,
                role: "template",
                displayMode: "paginated",
                playback: !params.preventPlayback ? "normal" : "silent"
            }
        }
        
        this.options.answer = {
            height: 1,
            width: 1,
            host: answerHost,
            viewParams: {
                scale: 0.1,
                role: "reader",
                displayMode: "paginated",
            }
        }
    }

    parseNFUrl(url){
        let splitUrl = url.split("/")
        return {
            host: splitUrl[2],
            scoreCode: splitUrl[splitUrl.length - 1]
        }
    }

    setAnswer(answerData){
        this.setState({
            answerData
        })
    }

    setStaffCount(staffCount){
        this.setState({staffCount})
    }

    setErrors(errors){
        this.setState({errors})
    }

    setScores(assignmentScore, answerScore){
        this.setState({
            assignmentScore,
            answerScore
        })
    }

    increaseErrorIndex(){
        let {currentErrorIndex} = this.state
        if(currentErrorIndex + 1 < this.state.errors.length){
            currentErrorIndex++
        }
        this.setState({currentErrorIndex})
    }

    decreaseErrorindex(){
        let {currentErrorIndex} = this.state;
        if(currentErrorIndex - 1 >= 0){
            currentErrorIndex--;
        }
        this.setState({currentErrorIndex});
    }

    resetErrorIndex(){
        this.setState({currentErrorIndex: 0});
    }

    increaseCurrentPlayCount(){
        let {currentPlayCount} = this.state;
        currentPlayCount++
        this.setState({currentPlayCount})
        return currentPlayCount;
    }

    showError(index){

        let errorIndex = this.state.errors[index]
        let measure = (Math.floor(errorIndex / this.state.staffCount))
        
        this.state.assignmentScore.selectRange(
            measure, // start of measure
            0, // start offset 
            measure, // start of measure again
            100, // the offset (set to a high number to almost guarantee it selects the whole measure)
            [errorIndex % this.state.staffCount] // staff
        )        
    }

    deselectMeasures(){
        this.state.assignmentScore.clearSelection()
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
                return
            }
            
            // if the assignment and answer are themselves a value (not a new key), but they do not match
            // return an error
            if(typeof answer !== 'object'){
                if(assignment !== answer){
                    mismatch = true;
                    return
                } else {
                    return
                }
            }
            
            // If the currentKey is specifically "chord", then we need to check for capitalization (direct match)
            // other text elements are handled below. 
            if(currentKey === "chord"){
                if(assignment[currentKey]._text !== answer[currentKey]._text){
                    mismatch = true;
                    return
                } else {
                    return
                }
            }

            // if both have a value at the currentKey (that value will be a string in this XML to JS conversion)
            // but they don't match (we check lowerCase here because for anything except chords we don't care about case)
            // return an error
            if(typeof answer[currentKey] === 'string'){
                if(!assignment || answer[currentKey].toLowerCase() !== assignment[currentKey].toLowerCase()){
                    mismatch = true;
                    return
                } else {
                    return
                }
            }

            for(let newKey in answer[currentKey]){
                if(ignoreKeys[newKey]) continue
                // console.log(newKey)
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
        this.setScores(assignment, answer);
        // get the newly created iframe objects for later use
        const assignmentFrame = document.getElementById(this.assignmentScoreCode);
        const answerFrame = document.getElementById(this.answerScoreCode);

        // interactive buttons
        const checkWorkButton = document.getElementById('check-work');
        const playAnswerButton = document.getElementById('play-answer');
      
        const activateButtons = () => {
            document.getElementById("reload-warning").remove()
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
            // if preventPlayback is set:
            // when a playback request is received, immediately call stop playback
            if(this.params.preventPlayback){
                assignment.addEventListener("playbackRequest", () => {
                    assignment.stopPlayback();
                })
            }
        }
        
        // ANSWER: When answer data loads, get and parse its NFXML and store it in the component state
        answerFrame.onload = () => {
            console.log("Answer Loaded")
            answer.addEventListener("scoreDataLoaded", () => {
                // if detailed grading method, load score data as musicXML (checks for perfect match)
                answer.getNoteflightXML().done(data => {
                    let dataXML = parser.parseFromString(data, "text/xml");
                    
                    const title = dataXML.getElementsByTagName("title")[0].innerHTML
                    this.props.setTitle(title)

                    let staves = [...dataXML.getElementsByTagName("staff")].filter((x, i) => i > 0)
                    this.setStaffCount(staves.length);

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
                this.resetErrorIndex()
                this.setErrors(errors);
                
                if(!errors.length){
                    assignmentFrame.className = "score-container nf-assignment-score nf-interactive assignment-score-passed"
                    this.deselectMeasures()
                    this.props.passedAssignment();
                }
            })
        }

        // If assingmentType is a dictation, we need to allow for the user to play the dictation example
        if(this.params.type === "dictation"){
            playAnswerButton.onclick = (e) => {
                
                if(this.state.currentPlayCount < parseInt(this.params.playCount) || this.params.playCount === "0"){
                    answer.playFromSelection(0);

                    let newPlayCount = this.state.currentPlayCount + 1;
                    if(newPlayCount === parseInt(this.params.playCount)){
                        e.target.innerText = "No Plays Remaining"
                        e.target.disabled = true;
                    }

                    this.increaseCurrentPlayCount();
                } 
            }
        }
    }



    render(){
        // calling the constructor in the render method allows us to reset the variables designated in the original constructor call 
        // this way when anything is that would effect the component, we can update just those parts without having to remount the entire component.
        // this.constructor(this.props, this.state)
        this.componentSetup();

        if(this.state.errors.length){
            this.showError(this.state.currentErrorIndex)
        }

        return (
            <div id="nf-interactive">
                {
                    this.params.type === "dictation" 
                    &&
                    <div>
                        <button id={`play-answer`} disabled>Loading Dictation...</button>
                        <p>Plays Remaining: {this.params.playCount === "0" 
                        ? 
                        "Unlimited" : parseInt(this.params.playCount) - this.state.currentPlayCount}</p>
                    </div>

                }
                <br/>
                {/* these div element below will be replaceed by a noteflight embeded score */}
                <div id={this.assignmentScoreCode}></div>
                <div id={this.answerScoreCode}></div>
                <br/>
                <p id="reload-warning"><em>If the button below is stuck on "Loading Assignment...", try refreshing the page. You may need to refresh a few time before the score loads correctly.</em></p>
                {
                    !this.props.passed
                    &&
                    <button id='check-work' disabled>Loading assignment...</button>
                }
                {
                    this.state.errors.length > 0
                    &&
                    <div id="error-navigation-buttons" className="section-box">
                        
                        <h2>Errors</h2>
                        <p>
                            Use the buttons below to navigate through the marked errors on the score.
                            Make sure to press the "Check Your Work" button to recheck for errors.
                        </p>
                        <button onClick={this.decreaseErrorindex}><MDBIcon icon="arrow-left"/> Previous Error </button>
                        <button onClick={this.increaseErrorIndex}>Next Error <MDBIcon icon="arrow-right"/></button>
                    </div>
                }
            </div>
        )
    }
} 
    
    


export default ContentNFInteractive;