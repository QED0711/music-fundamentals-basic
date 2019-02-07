import React, { Component } from 'react';
import './App.css';

import cryptr from './js/encryption';

import Navigation from './Banner/Navigation';
import NewAssignmentContainer from './Assignments/NewAssignmentContainer';

class App extends Component {
  render() {
    const search = new window.URLSearchParams(window.location.search);
    return (
      <div className="App">
        <Navigation />

        {search.get("path") === "assignment" && <h1>{cryptr.decrypt(window.location.href.split("path=assignment&")[1])}</h1>}

        {search.get("path") === "info" && <h1>Info Page</h1>}
        {search.get("path") === "new" && <NewAssignmentContainer />}
        {search.get("path") === "token-checker" && <h1>Token Checker Page</h1>}


      </div>
    );
  }
}

export default App;
