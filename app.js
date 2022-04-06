import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: '' };
      this.newVar = {};
  }

  callAPI() {
      fetch('http://localhost:9000/testAPI')
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    this.newVar = this.state.apiResponse;
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-link">{this.newVar}</h1>
        </header>
        <p className='App-intro'>{this.newVar}</p>
      </div>
    );
  }
}

export default App;
