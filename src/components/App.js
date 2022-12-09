import React, { Component } from 'react'
import Search from './search';
import axios from 'axios';
import Users from './Users';

export default class App extends Component {
    constructor(props){
        super(props);
        this.UserSearch=this.UserSearch.bind(this);
        this.state={
            users:[],
            loading:false
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


  render() {
    return (
      <div>
        <Search UserSearch={this.UserSearch}></Search>
        <Users users={this.state.users} loading={this.state.loading}></Users>
      </div>
    )
  }
}
