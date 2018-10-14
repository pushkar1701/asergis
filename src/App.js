import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { rtcActionStateToggle } from './actions/RTCAction'
import Button from '@material-ui/core/Button';
import rtcService  from './services/rtcServices';

class App extends Component {
  rtc = rtcService()
  constructor() {
    super();
    this.rtc.initialize();
  }

  buttonText = null;

  rtcActionHandler = (event) => {
    this.props.rtcActionStateToggle();
    this.props.rtcConnection ? this.rtc.pause() : this.rtc.play();
  }

  getColor = () => this.props.rtcConnection ? 'secondary' : 'primary';

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <video id="gum" playsInline muted></video>
        </header>
        <Button variant="contained"  color={this.getColor()} onClick={this.rtcActionHandler}>{this.props.rtcConnection ? 'Stop Video' : 'Start Video'}</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let rtcConnection = state.rtcConnection.toJS();
    return {
      rtcConnection: rtcConnection.rtcConnectionState
    }
}

const mapDispatchToProps = dispatch => ({
  rtcActionStateToggle: () => dispatch(rtcActionStateToggle())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
