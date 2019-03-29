import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { authenticateToken } from './store/actions/UserActions'
import { HeaderContainer, FooterContainer, UserContainer, QuizContainer, RoundContainer } from './containers'
import Home from './components/layouts/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer/>
        <Switch>
          <Route path="/users" component={UserContainer}/>
          <Route path="/quizzes" component={QuizContainer}/>
          <Route path="/rounds" render={(props) => <RoundContainer {...props}/>} />
          <Route path="/" component={Home}/>
        </Switch>
        <FooterContainer/>
      </Fragment>
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
