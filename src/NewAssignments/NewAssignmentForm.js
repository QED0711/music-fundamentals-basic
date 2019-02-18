import React, {Component} from 'react';

import cryptr from '../js/encryption';

import NewAssignmentOptions from './NewAssignmentOptions';
import CheckForOptions from './CheckForOptions';

class NewAssignmentForm extends Component {


    handleSubmit(setLink){
        return (e) => {
            e.preventDefault();

            const assignment = document.getElementById("assignment").value;
            const answer = document.getElementById("answer").value;
            const type = document.getElementById("assignment-type").value
            
            const playCount = type === "dictation" ? document.getElementById("play-count").value : null;
            const preventPlayback = type === "dictation" ? document.getElementById("prevent-playback").checked : null;

            const checkFor = [...document.getElementsByClassName("check-for")].map(x => {
                if(x.checked){
                    return x.value
                } else {
                    return null
                }
            }).filter(x => {if(x) return x})

            let path = `${window.location.origin}?assignment=`
            let params = JSON.stringify({assignment, answer, type, playCount, preventPlayback, checkFor})
            
            let encrypted = cryptr.encrypt(params);

            setLink(path + encrypted)
        }
    }

    render(){
        return(
            
            <form id="new-assignment-form" onSubmit={this.handleSubmit(this.props.setLink)}>
                <div className="assignment-form-section">
                    <h2 className="new-assignment-section-heading">Score URLs</h2>
                    <label>Assignment Score*</label><br/>
                    <input id="assignment" type="text" placeholder="Noteflight URL" required/><br/>
                    
                    <label>Answer Score*</label><br/>
                    <input id="answer" type="text" placeholder="Noteflight URL" required/><br/>
                </div>

                <div className="assignment-form-section">
                    <h2 className="new-assignment-section-heading">Assingnment Options</h2>
                    <NewAssignmentOptions />
                </div>

                <div className="assignment-form-section">
                    <h2 className="new-assignment-section-heading">Grading Options</h2>
                    <CheckForOptions />
                </div>

                <p>(* indicates a required field)</p>
                <input type="submit" value="Generate Assignment Link" />
            </form>

        )
    }

}

export default NewAssignmentForm;