import React, {Component} from "react";

class ContentContainer extends Component {

    renderContent(data){

    }

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