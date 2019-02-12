import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Banner/Navigation';
import NewAssignmentContainer from './NewAssignments/NewAssignmentContainer';
import AssignmentContainer from './Assignment/AssignmentContainer';
import InfoContainer from './Information/InfoContainer';
import TokenChecker from './Token/TokenChecker';


class App extends Component {
  render() {
    const search = new window.URLSearchParams(window.location.search);
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          {/* {search.get("path") === null && <InfoContainer />} */}
          {/* {search.get("path") === "new" && <NewAssignmentContainer />}
          {search.get("path") === "token-checker" && <TokenChecker />} */}

          {/* {search.get("path") === "assignment" && <AssignmentContainer />} */}
          {
            search.get("assignment")
            &&
            <AssignmentContainer />
          }

          <Route path="/info" component={InfoContainer} />
          <Route path="/new" exact component={NewAssignmentContainer} />
          <Route path="/token-checker" exact component={TokenChecker} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
