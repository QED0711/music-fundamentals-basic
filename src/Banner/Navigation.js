import React from 'react';

import {Link} from 'react-router-dom';

const Navigation = ({setPath}) => {

   const handleClick = (path) => {
        return (e) => {
            setPath(path);
        }
    }

    return(
        <div>

            <nav id="main-nav-banner" className="nav-banner nav-desktop">
                <div className="nav-button">
                    <Link to="/" onClick={handleClick("/")}>Information & Tutorials</Link>
                </div>
                <div className="nav-button">
                    <Link to="/new" onClick={handleClick("/new")}>New Assignment</Link>
                </div>
                <div className="nav-button">
                    <Link to="/token-checker" onClick={handleClick("/token-checker")}>Check Token</Link>
                </div>
            </nav>

            {/* <nav className="nav-banner nav-mobile">
                <div className="nav-button">
                    <Link to="/" onClick={handleClick("/")}>Information & Tutorials</Link>
                </div>
                <div className="nav-button">
                    <Link to="/new" onClick={handleClick("/new")}>New Assignment</Link>
                </div>
                <div className="nav-button">
                    <Link to="/token-checker" onClick={handleClick("/token-checker")}>Check Token</Link>
                </div>
                
            </nav> */}
        </div>


    )

}

export default Navigation;