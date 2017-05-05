import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="World" />
        <Hello name="Juan" />
        <Hello name="Mary" />
      </div>
    );
  }
}

export default App;
