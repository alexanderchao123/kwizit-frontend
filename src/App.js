import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import UserContainer from './containers/UserContainer'
import QuizContainer from './containers/QuizContainer'
import RoundContainer from './containers/RoundContainer'
import Home from './components/layouts/Home';
import { authenticateToken } from './store/actions/UserActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <Switch>
          <Route path="/users" component={UserContainer}/>
          <Route path="/quizzes" component={QuizContainer}/>
          <Route path="/rounds" render={(props) => <RoundContainer {...props}/>} />
          <Route path="/" component={Home}/>
        </Switch>
        <FooterContainer/>
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
