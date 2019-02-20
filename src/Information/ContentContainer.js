import React, {Component} from "react";

class ContentContainer extends Component {

    render(){
        const {content} = this.props
        return(
            <h1>{content.title}</h1>
        )
    }
}

export default ContentContainer;