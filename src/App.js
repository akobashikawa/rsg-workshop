import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const HelloWorld = () => (
  <h1>Hello React World!</h1>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </div>
    );
  }
}

export default App;
