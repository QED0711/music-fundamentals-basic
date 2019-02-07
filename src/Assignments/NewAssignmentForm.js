import React, {Component} from 'react';

import NewAssignmentOptions from './NewAssignmentOptions';
import CheckForOptions from './CheckForOptions';

class NewAssignmentForm extends Component {


    handleSubmit(setLink){
        return (e) => {
            e.preventDefault();
            const assignment = document.getElementById("assignment").value;
            const answer = document.getElementById("answer").value;
            const type = document.getElementById("assignment-type").value
            console.log({assignment, answer, type});
    
            setLink(`http://${window.location.hostname}:3000/?path=assignment&a=${assignment}&a=${answer}`)
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