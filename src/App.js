import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
   render() {
      return (
         <div className="App-header">
            <h1>Raghavendra Nataraj</h1>
         </div>
      );
   }
}

class MainPage extends React.Component {
   render() {
      return (
         <div className="Body"> 
	</div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div className="App-footer">
            <a href="https://github.com/raghavendra-nataraj" target="_blank"><img class="footer-icons" src={require('./Octocat.png')}/></a>
         </div>
      );
   }
}

class App extends Component {

  componentDidMount(){
    document.title = "Raghavendra Nataraj"
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <MainPage></MainPage>
	<Footer></Footer>
      </div>
    );
  }
}

export default App;
