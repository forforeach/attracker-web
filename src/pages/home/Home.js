import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appStore')
@observer
class Home extends Component {
  increment() {
    this.props.appStore.increment();
  }

  decrement() {
    this.props.appStore.decrement();
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <h3>Counter: {this.props.appStore.counter}</h3>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.increment.bind(this)}>+</button>
      </div>
    );
  }
}

export default Home;