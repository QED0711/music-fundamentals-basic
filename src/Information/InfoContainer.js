import React, {Component} from 'react';
import TutorialContainer from './TutorialContainer';

import studentContent from './content/studentContent'
import instructorContent from './content/instructorContent'

class InfoContainer extends Component {


    render(){
        const domainName = window.location.origin.split("//")[1]
        return(
            <div>
                <section className="text-box">                        
                    <h1 className="information-heading">{domainName}</h1>
                    <p className="information-paragraph"><em>Created and Maintained by Quinn Dizon</em></p>
                    <h2 className="information-heading"><em>NOTE: This software is still in development. Any use at this stage carries no expressed or implied guarantee of full functionality</em></h2>
                    <p>
                        {
                            
                            `Welcome to ${domainName} , a tool that allows music teachers to easily create and link to high quality, interactive, self-grading music assignments. 
                            Whether you are a teacher or a student, there is no signup required, and it is absolutely free to use.
                            `

                        }
                    </p>
                    <p>
                        {
                            `
                            This application is built using the Noteflight notation interface. If you are unfamiliar with their product, I highly recommend that you visit their site to learn more about the wonderful features Noteflight provides.
                            `
                        }
                    </p>
                    <a href="https://www.noteflight.com" target="_blank"><p>Noteflight.com</p></a>
                    <p>
                        Click the appropriate category below for more information and tutorials on how to use this site.
                    </p>
                </section>
                <TutorialContainer content={studentContent}/>
                <TutorialContainer content={instructorContent}/>
                
            </div>
        )
    }
}

export default InfoContainer;