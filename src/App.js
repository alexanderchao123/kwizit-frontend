import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import NavContainer from './containers/NavContainer'
import UserContainer from './containers/UserContainer'
import QuizContainer from './containers/QuizContainer'
import RoundContainer from './containers/RoundContainer'
import Home from './components/layouts/Home';
import { getUser } from './store/actions/UserActions'
import './App.css';

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) this.props.getUser(token)
  }

  render() {
    return (
      <div className="App">
        <NavContainer/>
        <Switch>
          <Route path="/users" component={UserContainer}/>
          <Route path="/quizzes" component={QuizContainer}/>
          <Route path="/rounds" component={RoundContainer} />
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => dispatch(getUser(token))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
