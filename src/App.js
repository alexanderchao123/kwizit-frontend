import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import Home from './components/layouts/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
