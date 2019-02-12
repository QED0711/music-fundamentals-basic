import React from 'react';

import {Link} from 'react-router-dom';

const Navigation = ({setPath}) => {

   const handleClick = (path) => {
        return (e) => {
            setPath(path);
        }
    }

    return(
        <nav id="main-nav-banner">
            {/* <a className="main-nav-link" href="/?path=info"><h3>Information & Tutorials</h3></a>
            <a className="main-nav-link" href="/?path=new"><h3>New Assignment</h3></a>
            <a className="main-nav-link" href="/?path=token-checker"><h3>Check Token</h3></a> */}

            <Link to="/" onClick={handleClick("/")}>Information & Tutorials</Link>
            <Link to="/new" onClick={handleClick("/new")}>New Assignment</Link>
            <Link to="/token-checker" onClick={handleClick("/token-checker")}>Check Token</Link>
        </nav>
    )

}

export default Navigation;