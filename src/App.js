import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
