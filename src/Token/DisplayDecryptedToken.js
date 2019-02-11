import React, {Component} from 'react';

import cryptr from '../js/encryption';

class DisplayDecryptedToken extends Component {

    decryptToken(token){
        return cryptr.decrypt(token)
    }

    render(){
        let decrypted = JSON.parse(this.decryptToken(this.props.token))
        return(
            <div id='decrypted-token'>
                <h4>Name: {decrypted.studentName}</h4>
                <h4>Date: {decrypted.date}</h4>
                <a href={decrypted.answer} target="_blank"><h4>View Score</h4></a>
            </div>
        )
    }
}

export default DisplayDecryptedToken;