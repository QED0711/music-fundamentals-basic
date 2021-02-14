import React, {Component} from 'react';
import DisplayToken from './DisplayToken';

class SignAndSubmit extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            signature: null,
            completionTime: Date.now()
        }
        this.setSignature = this.setSignature.bind(this);
    }

    setSignature(signature){
        this.setState({signature});
    }

    handleSubmit(setSignature){
        return (e) => {
            e.preventDefault();
            const signature = document.getElementById("name").value;
            setSignature(signature);
        }
    }

    encryptToken(data){

    }

    render(){
        
        return(
            <div id="submit-assignment" className="section-box">
                {
                    !this.state.signature
                    &&
                    <form id="sign-and-submit-form" onSubmit={this.handleSubmit(this.setSignature)}>
                        <h2>Congratulations! You passed!</h2>
                        <p>
                            If you completed this assignment as part of a class, sign your name below and submit.
                            A unique token will be generated for you to use as proof of completion.
                        </p>
                        <label for="name">Your Name</label><br/>
                        <input type="text" id="name" /><br/>
    
                        <input type="submit" value="Sign & Submit" />
                    </form>
                }

                {
                    !!this.state.signature
                    &&
                    <DisplayToken 
                        studentName={this.state.signature} 
                        answer={this.props.answer} 
                        title={this.props.title}
                        startTime={this.props.startTime}
                        completionTime={this.state.completionTime}
                    />
                }

            </div>
        )               
    }
}

export default SignAndSubmit;