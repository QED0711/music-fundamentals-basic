import React, {Component} from 'react'

import cryptr from '../js/encryption';

class DisplayToken extends Component {
    constructor(props){
        super(props);

        this.studentName = props.studentName;
        this.answer = props.answer
    }

    encryptData(studentName, answer){
        let tokenData = {
            studentName,
            answer,
            date: new Date()
        }
        console.log(tokenData);
        return cryptr.encrypt(JSON.stringify(tokenData));
    }

    render(){
        return(
            <div>
                <p>If you have done this assignment as part of a course, the token generated below may serve as proof of completion</p>
                <textarea id="encrypted-token" value={this.encryptData(this.studentName, this.answer)}></textarea>
            </div>
        )
    }
}

export default DisplayToken;