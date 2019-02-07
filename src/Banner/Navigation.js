import React from 'react';

const Navigation = () => {

    return(
        <nav id="main-nav-banner">
            <a className="main-nav-link" href="/?path=info"><h3>Information & Tutorials</h3></a>
            <a className="main-nav-link" href="/?path=new"><h3>New Assignment</h3></a>
            <a className="main-nav-link" href="/?path=token-checker"><h3>Check Token</h3></a>
        </nav>
    )

}

export default Navigation;