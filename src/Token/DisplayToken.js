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
                <p>If you have completed this assignment as part of a course, you can submit the token generated below is proof of completion</p>
                <textarea id="encrypted-token" value={this.encryptData(this.studentName, this.answer)}></textarea>
            </div>
        )
    }
}

export default DisplayToken;