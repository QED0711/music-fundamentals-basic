import React, {Component} from 'react';

class InstructorTutorials extends Component {

    tutorialSectionClick(e){
        let children = e.target.children
        console.log(children)
    }

    render(){
        return(
            <div className="tutorial-section" onClick={this.tutorialSectionClick}>
                <div className="toggle-expand">
                    <h1>+</h1>
                </div>
                <div className="tutorial-section-heading">
                    <h2>Instructor Tutorials</h2>
                </div>
            </div>
        )
    }
}

export default InstructorTutorials;