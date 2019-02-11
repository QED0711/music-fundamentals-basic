import React, {Component} from "react";

import cryptr from '../js/encryption';

import NFInteractive from './NFInteractive';
import SignAndSubmit from "../Token/SignAndSubmit";

class AssignmentContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            passed: false
        }
        this.passedAssignment = this.passedAssignment.bind(this);
    }

    passedAssignment(){
        this.setState({passed: true})
    }

    decryptParams(){
        const params = window.location.search.split("params=")[1]
        const decrypted = cryptr.decrypt(params);
        return JSON.parse(decrypted);
    }

    render(){
        const params = this.decryptParams();
        console.log("ASSIGNMENT-PARAMS: ", params)
        return(
            <div id="assignment-container">
                <NFInteractive params={params} passedAssignment={this.passedAssignment} />

                {
                    this.state.passed
                    &&
                    <SignAndSubmit />
                }
            </div>
            
        )
    }

}

export default AssignmentContainer;