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
        return `${days[date.getDay()]}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, at ${date.getHours()}:${this.padZero(date.getMinutes())} `
    }

    padZero(n){
        return n >= 10
            ? n
            : `0${n}`
    }

    ms2HMS( ms ) {
        let seconds = ms / 1000;
        let hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
        seconds = seconds % 3600; // seconds remaining after extracting hours
        let minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
        seconds = Math.round(seconds % 60);
        
        const containsNaNs = [hours, minutes, seconds].some(t => isNaN(t))

        return containsNaNs
            ? null
            : `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
    }

    calcTimeToComplete(decrypted){
        let timeToComplete;
        try{
            timeToComplete = this.ms2HMS(decrypted.completionTime - decrypted.startTime);
        } catch(err){
            timeToComplete = null
        }

        return timeToComplete
            ? timeToComplete
            : "NA"
    }

    render(){
        let decrypted = JSON.parse(this.decryptToken(this.props.token))
        return(
            <div id='decrypted-token' className='section-box'>
                {
                    decrypted
                    &&
                    <div className="token-info">
                        <h2 className="section-heading">Verified</h2>
                        <h4>Name: {decrypted.studentName}</h4>
                        <h4>Completed On: {this.parseDate(decrypted.date)}</h4>
                        <h4>Time to Complete: {this.calcTimeToComplete(decrypted)}</h4>
                        <a href={decrypted.answer} target="_blank"><h4>{decrypted.title}</h4></a>
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