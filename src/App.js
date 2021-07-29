// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Footer from './components/layouts/Footer';
import { Alert } from './components/layouts/Alert';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
})

class App extends Component {

  // setting default values in the state.

  state = {
    users: [],
    loading: false,
    alert: null
  }

  // it will put data in the start of the landing page
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });

  }
  // Searching users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await github.get(`/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear Users
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // Alert method
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {


    // declaring variables
    const { users, loading } = this.state;

    return (
      <Router>
        <div className="App">
          < Navbar title='Github Finder' icon='fab fa-github' />

          <Alert alert={this.state.alert} />

          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} clearShow={users.length > 0 ? true : false} setAlert={this.setAlert} />
          
          <Users loading={loading} users={users} />



          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
