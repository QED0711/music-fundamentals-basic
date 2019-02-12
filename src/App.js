import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Banner/Navigation';
import NewAssignmentContainer from './NewAssignments/NewAssignmentContainer';
import AssignmentContainer from './Assignment/AssignmentContainer';
import InfoContainer from './Information/InfoContainer';
import TokenChecker from './Token/TokenChecker';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      path : "/"
    }

    this.setPath = this.setPath.bind(this);
  }

  setPath(path){
    this.setState({path});
    this.forceUpdate();

  }

  render() {
    const search = new window.URLSearchParams(window.location.search);
    let path = window.location.href.split("/")
    path = path[path.length - 1];
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation setPath={this.setPath} />

          {
            (this.state.path === "/" && search.get("assignment"))
            &&
            <AssignmentContainer />
          }
          {
            (this.state.path === "/" && !search.get("assignment"))
            &&
            <Route path={"/"} exact component={InfoContainer} />
          }
          <Route path="/new" exact component={NewAssignmentContainer} />
          <Route path="/token-checker" exact component={TokenChecker} />

          

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
