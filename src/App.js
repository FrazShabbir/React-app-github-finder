// import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Footer from './components/layouts/Footer';
import { Alert } from './components/layouts/Alert';
import { About } from './components/pages/About';
import User from './components/users/User';
const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
})

class App extends Component {

  // setting default values in the state.

  state = {
    users: [],
    user: {},
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
  // Get Single user Data
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await github.get(`/users/${username}`);
    this.setState({ user: res.data, loading: false });
  }

  render() {


    
    // declaring variables
    const { users, user, loading } = this.state;

    return (
      <Router>
        <div className="App">
          {/* Navbar component */}
          < Navbar title='Github Finder' icon='fab fa-github' />
          {/* component for alert section */}
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='/' render={
              props => (
                <Fragment>
                  {/* component for searching user from github api */}
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} clearShow={users.length > 0 ? true : false} setAlert={this.setAlert} />
                  {/* component for showing all the users */}
                  <Users loading={loading} users={users} />
                </Fragment>
              )
            } />

            <Route exact path='/about' render={props => (
              <Fragment>
                <About />
              </Fragment>
            )} />

            <Route exact path='/user/:login' render={
              props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading} />
              )
            } />
          </Switch>




          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
