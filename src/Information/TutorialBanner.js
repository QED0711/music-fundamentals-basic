import React, {Component} from 'react';

class TutorialBanner extends Component {


    render(){
        return(
            <div className="tutorial-banner" onClick={this.props.toggleActive}>
                <div>
                    <h2>{this.props.activeState ? "x" : "+"}</h2>    
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}

export default TutorialBanner;