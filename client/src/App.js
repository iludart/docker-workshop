import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/users/2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then(data => this.setState({ user: data }));
  }

  render() {
    return (
      <div className="App">
        {this.state.user &&
          <div>{this.state.user.name}</div>
        }
      </div>
    );
  }
}

export default App;
