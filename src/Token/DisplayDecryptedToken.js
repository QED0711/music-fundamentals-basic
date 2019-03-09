import React, {Component} from 'react';

import cryptr from '../js/encryption';

class DisplayDecryptedToken extends Component {

    decryptToken(token){
        try{
            cryptr.decrypt(token)
        } catch(error){
            return null
        }
        return cryptr.decrypt(token)
    }

    parseDate(date){
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        date = new Date(date)
        return `${days[date.getDay()]}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, at ${date.getHours()}:${date.getMinutes()} `
    }

    render(){
        let decrypted = JSON.parse(this.decryptToken(this.props.token))
        return(
            <div id='decrypted-token' className='section-box'>
                {
                    decrypted
                    &&
                    <div>
                        <h2 className="section-heading">Verified</h2>
                        <h4>Name: {decrypted.studentName}</h4>
                        <h4>Completed On: {this.parseDate(decrypted.date)}</h4>
                        <a href={decrypted.answer} target="_blank"><h4>View Answers</h4></a>
                    </div>
                }               

                {
                    !decrypted
                    &&
                    <h2 className="section-heading">The token you have entered is invalid</h2>
                }
            </div>
        )
    }
}

export default DisplayDecryptedToken;