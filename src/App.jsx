import React, { Component } from "react";
import {connect} from "react-redux";
import Counter from './Counter.jsx'
import {add, sub, addNumber} from './redux/actions/actions'
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
        <div className={"Actions"}>
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Отнять 17</button>
        </div>
        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
