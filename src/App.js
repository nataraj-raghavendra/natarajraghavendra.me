import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    document.title = "Raghavendra Nataraj"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Raghavendra Nataraj</h1>
	</header>
      </div>
    );
  }
}

export default App;
