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

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div className="App">
        <Input onClick={this.clickHandler} />

        {this.state.name && (
          <Hello name={this.state.name} />
        )}
        
      </div>
    );
  }
}

export default App;
