import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

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
        const params = window.location.search.split("assignment=")[1]
        const decrypted = cryptr.decrypt(params);
        return JSON.parse(decrypted);
    }

    render(){
        if(!window.location.search.match("assignment")){
            let path = window.location.href.split("/")
            path = path[path.length - 1];
            return <Redirect to={`/${path}`} />
        }
        const params = this.decryptParams();
        console.log("ASSIGNMENT-PARAMS: ", params)
        return(
            <div id="assignment-container">
                <NFInteractive params={params} passed={this.state.passed} passedAssignment={this.passedAssignment} />

                {
                    this.state.passed
                    &&
                    <SignAndSubmit answer={params.answer}/>
                }
            </div>
            
        )
    }

}

export default AssignmentContainer;