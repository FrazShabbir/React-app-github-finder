// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
})

class App extends Component {

  state = {
    users: [],
    loading: false
  }
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
   clearUsers = ()=>{
     this.setState({users:[],loading:false})
   }
  render() {
    const {users,loading}=this.state;
    return (
      <div className="App">
        < Navbar title='Github Finder' icon='fab fa-github' />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} clearShow={users.length>0?true:false} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Users loading={loading} users={users} />

          </div>
        </div>


      </div>
    );
  }
}

export default App;
