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
        this.setState({link});
    }

    render(){
        return(
            <div id="new-assignment-container">
                <NewAssignmentForm setLink={this.setLink}/>
                {this.state.link && <h4>{this.state.link}</h4>}
            </div>
        )
    }
}

export default NewAssignmentContainer