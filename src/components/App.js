import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import Search from './Search';
import Users from './Users';
import About from './About';
import UserProfile from './UserProfile';
import NotFound from './NotFound';

export default class App extends Component {
    constructor(props){
        super(props);
        this.UserSearch=this.UserSearch.bind(this);
        this.getUser=this.getUser.bind(this);
        this.state={
            users:[],
            loading:false,
            user:{}
        }
    }
    UserSearch(keyword){
            this.setState({loading:true})
            setTimeout(() => {
                    // console.log(keyword);
                    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
                        console.log(res.data.items);
                        this.setState({users:res.data.items,loading:false})
                    })
            }, 1000);
    }

    getUser(username){
      this.setState({loading:true})
        setTimeout(() => {
              axios.get(`https://api.github.com/users/${username}`).then(
                res=>{
                  console.log(res.data);
                  this.setState({user:res.data,loading:false})
                }
              )
        }, 1000);
    }

  render() {
    return (
      <BrowserRouter>
      <Nav icon="fa-brands fa-github" title="GithubFinder"></Nav>
        <Switch>
            <Route exact path="/" render={
                props=>(
                  <>
                    {/* aynı dizinde dönecek componentler */}
                    <Search UserSearch={this.UserSearch}></Search>
                    <Users loading={this.state.loading}
                            users={this.state.users}></Users>

                  </>
                )
              }
            ></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/getuser/:login" render={
              props=>(
                  <UserProfile 
                  {...props}
                  getUser={this.getUser}></UserProfile>
              )
            }></Route>
            <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
