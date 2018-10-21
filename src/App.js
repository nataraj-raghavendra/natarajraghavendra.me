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
	      <div className="footer-img">       
	      <a className="footer-img" href="https://github.com/raghavendra-nataraj" target="_blank"><img class="footer-icons" src={require('./images/Octocat.png')}/></a></div>
	      <div className="footer-img">
	      <a className="footer-img" href="https://www.linkedin.com/in/raghavendranataraj" target="_blank"><img class="footer-icons" src={require('./images/In.png')}/></a></div>
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
