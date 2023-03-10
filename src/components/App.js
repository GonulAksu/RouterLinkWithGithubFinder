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
        this.clearSearch=this.clearSearch.bind(this);
        this.getuserRepos=this.getuserRepos.bind(this);
        this.state={
            users:[],
            loading:false,
            user:{},
            userRepos:[]
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

    getuserRepos(username){
        this.setState({loading:true})
      setTimeout(() => {
        axios.get(`https://api.github.com/users/${username}/repos`).then((res)=>{
          
              this.setState({ userRepos:res.data,loading:false})
        })
      }, 1000);
    }

    clearSearch() {
        this.setState({users:[]})
    }
  render() {
    return (
      <BrowserRouter>
      <Nav icon="fa-brands fa-github" title="GithubFinder"></Nav>
        <Switch>
            <Route exact path="/" render={
                props=>(
                  <>
                    {/* ayn?? dizinde d??necek componentler */}
                    <Search UserSearch={this.UserSearch}
                            clearSearch={this.clearSearch}
                            swichclrsrchbtn={this.state.users.length>0?true:false}
                      ></Search>
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
                  getUser={this.getUser}
                  user={this.state.user}
                  userRepos={this.state.userRepos}
                  getuserRepos={this.getuserRepos}
                  loading={this.state.loading}></UserProfile>
              )
            }></Route>
            <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
