import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import UserContainer from './containers/UserContainer'
import Home from './components/layouts/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer/>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/users" component={UserContainer}
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
