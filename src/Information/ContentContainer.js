import React, {Component} from "react";

class ContentContainer extends Component {

    render(){
        const {content} = this.props
        return(
            <div className="content-container">
                {content.data}
            </div>
        )
    }
}

export default ContentContainer;