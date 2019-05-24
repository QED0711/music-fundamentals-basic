import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import {MDBIcon} from 'mdbreact';

import cryptr from '../js/encryption';

import NFInteractive from './NFInteractive';
import SignAndSubmit from "../Token/SignAndSubmit";

class AssignmentContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            passed: false
        }
        this.passedAssignment = this.passedAssignment.bind(this);
    }

    passedAssignment(){
        this.setState({passed: true})
    }

    decryptParams(){
        const params = window.location.search.split("assignment=")[1]
        const decrypted = cryptr.decrypt(params);
        return JSON.parse(decrypted);
    }

    render(){

        window.assignmentInfo = () => {
            console.log("ASSIGNMENT-PARAMS: ", params)
        }

        if(!window.location.search.match("assignment")){
            let path = window.location.href.split("/")
            path = path[path.length - 1];
            return <Redirect to={`/${path}`} />
        }
        const params = this.decryptParams();
        return(
            <section className="text-box">
                <h2>Interactive Assignment</h2>
                <p>This is an interactive assignment created on {window.location.origin.split("//")[1]}. All assignments are self-grading.</p>
                <p>At any time, you can check your work by pressing the "Check Your Work" button below the assignment. If there are any errors, they will be highlighted on the score. In the case of multiple erros, you can step through each error with arrow buttons that will appear below the assignment to see what you got right, and what you got wrong.</p>
                <p>If the assingment is a dictation, you will also be allowed to play the dictation via the "Play Dictation Excerpt" button above the assingment. Depending on how the assignment was created, you may have a limited number of playings available. Your remaining playings will also appear above the assingment.</p>
                <p>All assignments are built using the Noteflight music notation application. For information on how to interact with the Noteflight score, see <a href="https://www.noteflight.com/guide" target="_blank">this link</a></p>

                <div id="assignment-container">
                    <NFInteractive params={params} passed={this.state.passed} passedAssignment={this.passedAssignment} />

                    {
                        this.state.passed
                        &&
                        <SignAndSubmit answer={params.answer}/>
                    }
                </div>
            </section>
            
        )
    }

}

export default AssignmentContainer;