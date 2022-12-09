import React, { Component } from 'react'

export default class UserProfile extends Component {
    // user sayfasında goptofile butonu login parametresini barındırır bizde bu parameterye ulaşacagız,yani route üzerinden ekstra bilgi alacağız
    componentDidMount(){
      this.props.getUser(this.props.match.params.login)
    }
  render() {
    return (
      <div>
            user profile
      </div>
    )
  }
}
