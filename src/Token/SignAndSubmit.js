import React, {Component} from 'react';
import DisplayToken from './DisplayToken';

class SignAndSubmit extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            signature: null
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
            <div>
                {
                    !this.state.signature
                    &&
                    <form id="sign-and-submit-form" onSubmit={this.handleSubmit(this.setSignature)}>
                        <label for="name">Student Name</label><br/>
                        <input type="text" id="name" /><br/>
    
                        <input type="submit" value="Sign & Submit" />
                    </form>
                }

                {
                    !!this.state.signature
                    &&
                    <DisplayToken studentName={this.state.signature} answer={this.props.answer}/>
                }

            </div>
        )               
    }
}

export default SignAndSubmit;