import React, {Component} from "react";

import cryptr from '../js/encryption';

import NFInteractive from './NFInteractive';

class AssignmentContainer extends Component {

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
                <h4>Assignment Type: {params.type}</h4>
                {
                    params.type === "dictation" 
                    &&
                    <div>
                        <h4>Play Count: {params.playCount == 0 ? "No Limit" : params.playCount }</h4>
                    </div>
                }
                <NFInteractive params={params} />
            </div>
            
        )
    }

}

export default AssignmentContainer;