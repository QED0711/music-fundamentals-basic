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
            
            const playcount = type === "dictation" ? document.getElementById("play-count").value : null;
            const allowPlayback = type === "dictation" ? document.getElementById("allow-playback").checked : null;

            const checkFor = [...document.getElementsByClassName("check-for")].map(x => {
                if(x.checked){
                    return x.id
                } else {
                    return null
                }
            }).filter(x => {if(x) return x})

            console.log({assignment, answer, type, playcount, allowPlayback, checkFor});
            let path = `http://${window.location.hostname}:3000?path=assignment&`
            let params = `a=${assignment}&aa=${answer}&type=${type}&checkFor=${checkFor}`
            
            let encrypted = cryptr.encrypt(params);

            setLink(path + encrypted)
        }
    }

    render(){
        return(
            
            <form id="new-assignment-form" onSubmit={this.handleSubmit(this.props.setLink)}>
                <label>Assignment Score</label><br/>
                <input id="assignment" type="text" required/><br/>
                
                <label>Answer Score</label><br/>
                <input id="answer" type="text" required/><br/>

                <NewAssignmentOptions />
                <CheckForOptions />

                <input type="submit" value="Generate Assignemtn Link" />
            </form>

        )
    }

}

export default NewAssignmentForm;