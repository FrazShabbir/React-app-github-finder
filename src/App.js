// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import axios from 'axios';
class App extends Component {

  componentDidMount() {
    console.log(123);
    axios.get('https://api.github.com/users');
  }

  render() {


    return (
      <div className="App">
        < Navbar title='Github Finder' icon='fab fa-github' />
        <div className="container">
          <div className="row">
          <Users />

          </div>
        </div>
       

      </div>
    );
  }
}

export default App;
