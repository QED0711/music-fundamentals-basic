import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';

class MobileNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    handleClick = (path) => {
        return (e) => {
            this.props.setPath(path);
        }
    }


    toggleNav(){
        console.log("CALLED")
        let active = !this.state.active
        this.setState({active}) 
    }

    render(){

        return(
            <nav className="nav-banner nav-mobile" onClick={this.toggleNav}>
                {
                    this.state.active ? 
                        <div>
                            <div className="nav-button">
                                <Link to="/" onClick={this.handleClick("/")}>Information & Tutorials</Link>
                            </div>
                            <hr/>
                            <div className="nav-button">
                                <Link to="/new" onClick={this.handleClick("/new")}>New Assignment</Link>
                            </div>
                            <hr/>
                            <div className="nav-button">
                                <Link to="/token-checker" onClick={this.handleClick("/token-checker")}>Check Token</Link>
                            </div>    
                        </div>
                    :
                    <MDBIcon icon="bars" size="2x" className="white-text hamburger-icon"/>        

                }
            </nav>
        )
    }
}

export default MobileNavigation;