import React, { Component } from 'react';
import './App.css';

const Hello = (props) => (
  <h1>Hello {props.name}!</h1>
);

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
