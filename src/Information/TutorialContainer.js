import React, {Component} from 'react';

import TutorialBanner from './TutorialBanner';
import ContentContainer from './ContentContainer';


class TutorialContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            active: false
        }

        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive(){
        let active = !this.state.active
        this.setState({active});
    }


    tutorialSectionClick(e){
        let children = e.target.children
        console.log(children)
    }

    render(){
        const {content} = this.props

        return(
            <div className="tutorial-container">
                <TutorialBanner title={content.title} activeState={this.state.active} toggleActive={this.toggleActive} />
                {
                    this.state.active 
                    &&
                    <ContentContainer content={content}/>
                }
            </div>
        )
    }
}

export default TutorialContainer;