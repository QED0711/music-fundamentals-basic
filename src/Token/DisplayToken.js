import React, {Component} from 'react'

import cryptr from '../js/encryption';

class DisplayToken extends Component {
    constructor(props){
        super(props);
        
        this.studentName = props.studentName;
        this.answer = props.answer;
        this.title = props.title;
        this.startTime = props.startTime;
        this.completionTime = props.completionTime;

    }

    encryptData(){
        let tokenData = {
            studentName: this.studentName,
            answer: this.answer,
            title: this.title,
            date: new Date(),            
            startTime: this.startTime,
            completionTime: this.completionTime
        }
        console.log(tokenData);
        return cryptr.encrypt(JSON.stringify(tokenData));
    }

    copyText(e){
        const text = document.getElementById("encrypted-token");
        text.select();
        document.execCommand("copy");
    }

    render(){
        return(
            <div className="encrypted-token">
                <p>
                    The token below may serve as proof of completion for this assignment.
                </p>
                <textarea id="encrypted-token" value={this.encryptData()}></textarea>
                <button onClick={this.copyText}>Copy to Clipboard</button>
            </div>
        )
    }
}

export default DisplayToken;