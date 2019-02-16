import React, {Component} from 'react';

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

    render(){
        return(
            <div id="new-assignment-container">
                <NewAssignmentForm setLink={this.setLink}/>
                {this.state.link 
                && 
                <div>
                    <p>Share the link below to give students and other users access to your assignment</p>
                    <textarea id="copy-link" defaultValue={this.state.link}></textarea>
                    <br/>
                    <a href={this.state.link} target="_blank">See Your Assignment</a>
                </div>
                }
            </div>
        )
    }
}

export default NewAssignmentContainer