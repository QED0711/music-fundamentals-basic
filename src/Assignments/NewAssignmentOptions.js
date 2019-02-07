import React, {Component} from 'react';

import DictationOptions from './DictationOptions';

class NewAssignmentOptions extends Component {

    constructor(props){
        super(props);

        this.state = {
            type: "written"
        }

        this.setType = this.setType.bind(this);
    }

    setType(){
        this.setState({
            type: document.getElementById("assignment-type").value
        })
    }

    handleChange(setType){
        return () => {
            setType()
            console.log("called")
        }
    }

    render(){
        return(
            <div>
                <label>Assignment Type</label><br/>
                <select id="assignment-type" onChange={this.handleChange(this.setType)}>
                    <option value="written">Written</option>
                    <option value="dictation">Dictation</option>
                </select>
                <br/>
                {
                    this.state.type === "dictation"
                    &&
                    <DictationOptions />
                }
            </div>
        )
    }
}

export default NewAssignmentOptions;