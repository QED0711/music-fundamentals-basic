import React, {Component} from 'react';
import TutorialContainer from './TutorialContainer';

import studentContent from './content/studentContent'
import instructorContent from './content/instructorContent'

class InfoContainer extends Component {


    render(){
        const domainName = window.location.origin.split("//")[1]
        return(
            <div>
                <h1>{domainName}</h1>
                <p>
                    {

                    `Welcome to ${domainName} , a tool that allows music teachers to easily create and link to high quality, interactive, self-grading music assignments. Whether you are a teacher or a student, there is no signup required, and it is 100% free to use!`
                    }
                </p>

                <p>
                    Click the appropriate category below for more information and video tutorials on how to use this site.
                </p>
                <TutorialContainer content={studentContent}/>
                <TutorialContainer content={instructorContent}/>
                
            </div>
        )
    }
}

export default InfoContainer;