import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Input from './Input';
import './Input.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div className="App">
        <Input onChange={this.changeHandler} />
        <Hello name={this.state.name} />
      </div>
    );
  }
}

export default App;
