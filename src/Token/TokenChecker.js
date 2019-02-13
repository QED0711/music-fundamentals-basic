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
            <div id="token-checker">
                <form id="token-input-form" onSubmit={this.handleSubmit(this.setToken)}>
                    <label for="encrypted-token">Paste Your Token Here</label><br/>
                    <textarea id="encrypted-token"></textarea><br/>

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