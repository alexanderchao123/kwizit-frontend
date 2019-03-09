import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import NavContainer from './containers/NavContainer'
import UserContainer from './containers/UserContainer'
import QuizContainer from './containers/QuizContainer'
import RoundHostContainer from './containers/RoundHostContainer'
import RoundPlayerContainer from './containers/RoundPlayerContainer'
import Home from './components/layouts/Home';
import { authenticateToken } from './store/actions/UserActions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer/>
        <Switch>
          <Route path="/users" component={UserContainer}/>
          <Route path="/quizzes" component={QuizContainer}/>
          <Route path="/rounds/host" render={(props) => <RoundHostContainer {...props}/>} />
          <Route path="/rounds/player" render={(props) => <RoundPlayerContainer {...props}/>} />
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) this.props.authenticateToken(token)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateToken: (token) => dispatch(authenticateToken(token))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
