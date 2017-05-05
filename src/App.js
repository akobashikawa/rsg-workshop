import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';

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
