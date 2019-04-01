import React, { Component } from "react";
import {connect} from "react-redux";
import "./App.scss";

class App extends Component {
  // state = {
  //   counter: 0
  // };

  // updateCounter(value) {
  //   // this.setState({
  //   //   counter: this.state.counter + value
  //   // });
  // }

  render() {
    // console.log('App', this.props)
    return (
      <div className={"App"}>
        <h1>
          <strong>Счётчик {this.props.counter}</strong>
        </h1>
        <hr />
        <div className={"Actions"}>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Отнять 1</button>
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

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
