import React, {Component} from 'react';
import DisplayDecryptedToken from './DisplayDecryptedToken';

class TokenChecker extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentToken: null
        }

        this.setToken = this.setToken.bind(this);
    }

    setToken(currentToken){
        this.setState({currentToken})
    }

    handleSubmit(setToken){
        return (e) => {
            e.preventDefault();
            setToken(document.getElementById("encrypted-token").value)
        }
    }

    render(){
        return(
            <div id="token-checker" className="text-box">
                <form id="token-input-form" onSubmit={this.handleSubmit(this.setToken)}>
                    <h2>Token Checker</h2>
                    <p>Paste your token in the text box below. If a token is authentic, information will be displayed, including the user's signature, the date and time completed, and the answer template to the assignment.</p>
                    <textarea id="encrypted-token" style={{width: "95%", margin: "0 auto", minHeight: "10em"}}></textarea><br/>

                    <input type="submit" value="Verify Token" />
                </form>

                {
                    !!this.state.currentToken
                    &&
                    <DisplayDecryptedToken token={this.state.currentToken} />
                }
            </div>
        )
    }
}

export default TokenChecker;