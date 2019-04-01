import React, { Component } from "react";
import {connect} from "react-redux";
import "./App.scss";

class App extends Component {
  // state = {
  //   counter: 0
  // };

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    });
  }

  render() {
    // console.log('App', this.props)
    return (
      <div className={"App"}>
        <h1>
          <strong>Счётчик {this.props.counter}</strong>
        </h1>
        <hr />
        <div className={"Actions"}>
          <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>Отнять 1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
