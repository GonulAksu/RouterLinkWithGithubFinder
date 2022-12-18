import React, { Component } from 'react'
import Loading from './Loading';
import Repos from './Repos';

export default class UserProfile extends Component {
    // user sayfasında goptofile butonu login parametresini barındırır bizde bu parameterye ulaşacagız,yani route üzerinden ekstra bilgi alacağız
   
    componentDidMount(){
      this.props.getUser(this.props.match.params.login)
      this.props.getuserRepos(this.props.match.params.login)
      setTimeout(() => {
          console.log(this.props.user)
          console.log(this.props.userRepos)
      }, 3000);
      }
    
  render() {
    const {avatar_url,login,location,followers,following,public_repos,bio,html_url,blog }=this.props.user
    return (
     <> 
          {this.props.loading ? <Loading></Loading>:
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card">
                        <img src={avatar_url} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">{login}</h3>
                            <hr />
                            <p className="card-text text-uppercase"><i className="fa-solid fa-location-crosshairs"></i>
                             &nbsp; {location}
                            </p>
                            <hr />
                            <a href={html_url} className="btn btn-primary">Go Profile</a>
                        </div>

                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card">
                      <div className="card-body">
                        {bio&&<>
                          <h2>About</h2>
                          <p><b>{bio}</b></p>
                        </>}
                        {
                          blog&&<>
                              <h3>Blog</h3>
                              {blog.includes("http") ? 
                              <a href={blog} className="link-info">{blog}</a>:
                                <p>{blog}</p>
                              }
                          </>
                        }
                        <div>
                          <span className="badge  
                          badge-primary m-1">Followers : {followers}</span>
                          <span className="badge  badge-success m-1">Following : {following}</span>
                          <span className="badge  
                          badge-warning m-1">Public_Repos : {public_repos}</span>
                        </div>
                      </div>
                      <ul className="list-group list-group-flush">
                          <Repos userRepos={this.props.userRepos}></Repos>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          }
     </>
    )
  }
}
