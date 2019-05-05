import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrFindDecision } from '../../../store/actions/RoundPlayerActions'
import RoundBody from '../elements/RoundBody'
import RoundHeader from '../elements/RoundHeader'
import { Grid, Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height: '50%',
    color: 'blue',
  },
});

class RoundChoiceBlock extends Component {
  clickHandler = (event) => {
    let option = {
      choice: event.target.value,
      roundPin: this.props.round.pin,
      token: localStorage.getItem("token")
    }
    this.props.createOrFindDecision(option)
  }

  render() {
    const { classes } = this.props

    return(
      <RoundBody>
        <RoundHeader>Select A Choice</RoundHeader>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper}>
              <button type="button" value="0" onClick={this.clickHandler}>A</button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper}>
              <button type="button" value="1" onClick={this.clickHandler}>B</button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper}>
              <button type="button" value="2" onClick={this.clickHandler}>C</button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <button type="button" value="3" onClick={this.clickHandler}>
              <Paper className={classes.paper}>D</Paper>
            </button>
          </Grid>
        </Grid>
      </RoundBody>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundPlayerInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrFindDecision: (options) => dispatch(createOrFindDecision(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RoundChoiceBlock))
