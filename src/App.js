import React, { Component } from 'react';
import './App.css';

import cryptr from './js/encryption';

import Navigation from './Banner/Navigation';
import NewAssignmentContainer from './NewAssignments/NewAssignmentContainer';
import AssignmentContainer from './Assignment/AssignmentContainer';
import InfoContainer from './Information/InfoContainer';

class App extends Component {
  render() {
    const search = new window.URLSearchParams(window.location.search);
    return (
      <div className="App">
        <Navigation />
        {search.get("path") === null && <InfoContainer />}

        {search.get("path") === "assignment" && <AssignmentContainer />}

        {search.get("path") === "new" && <NewAssignmentContainer />}
        {search.get("path") === "token-checker" && <h1>Token Checker Page</h1>}


      </div>
    );
  }
}

export default App;
