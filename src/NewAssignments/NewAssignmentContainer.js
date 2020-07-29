import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import NewAssignmentForm from './NewAssignmentForm';

class NewAssignmentContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            link: null
        }

        this.setLink = this.setLink.bind(this);
    }

    setLink(link){
        console.log("called")
        this.setState({link});
    }

    copyText(e){
        const text = document.getElementById("copy-link");
        debugger
        text.select();
        document.execCommand("copy");
    }

    render(){
        return(
            <div id="new-assignment-container">
            <section className="instructions text-box">
                <h2>Create a new assignment</h2>
                <p>
                    Welcome to the assignment creator! To make a new assignment, you will need two URLs: One to your assignment score that you created in <a className="in-text-link" href="https://www.noteflight.com" target="_blank">Noteflight</a> (the one people will interact with), and an answer template score. 
                    Your answer score should be the same as the assignment score, but with all the answers marked exactly as you would like them in the assignment.
                    Make sure both scores are shared on Noteflight with all users, a specific user, or a specific group, and that "Let people copy & export this score" is checked.
                </p>
                <p>
                    See the {/* <Link to="/" className="in-text-link"> */}tutorials{/* </Link> */} for more information on how to setup your scores.
                </p>
            </section>
                <NewAssignmentForm setLink={this.setLink}/>
                {this.state.link 
                && 
                <div>
                    <p>Share the link below to give students and other users access to your assignment</p>
                    <textarea id="copy-link" value={this.state.link} readonly="true"></textarea>
                    <button className="copy-text-button" onClick={this.copyText}>Copy to Clipboard</button>
                    <br/>
                    <a href={this.state.link} target="_blank">See Your Assignment</a>
                </div>
                }
            </div>
        )
    }
}

export default NewAssignmentContainer