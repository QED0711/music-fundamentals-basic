import React, {Component} from 'react';

class TutorialBanner extends Component {


    render(){
        return(
            <div className="tutorial-banner" onClick={this.props.toggleActive}>
                <div className="tutorial-banner-element tutorial-active-indicator">
                    <h1>{this.props.activeState ? "-" : "+"}</h1>    
                </div>
                <div className="tutorial-banner-title tutorial-banner-element">
                    <h1>{this.props.title}</h1>
                </div>
                
            </div>
        )
    }
}

export default TutorialBanner;