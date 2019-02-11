import React, { Component } from 'react';
import './App.css';

import cryptr from './js/encryption';

import Navigation from './Banner/Navigation';
import NewAssignmentContainer from './NewAssignments/NewAssignmentContainer';
import AssignmentContainer from './Assignment/AssignmentContainer';
import InfoContainer from './Information/InfoContainer';
import TokenChecker from './Token/TokenChecker';


class App extends Component {
  render() {
    const search = new window.URLSearchParams(window.location.search);
    return (
      <div className="App">
        <Navigation />
        {search.get("path") === null && <InfoContainer />}

        {search.get("path") === "assignment" && <AssignmentContainer />}

        {search.get("path") === "new" && <NewAssignmentContainer />}
        {search.get("path") === "token-checker" && <TokenChecker />}


      </div>
    );
  }
}

export default App;
