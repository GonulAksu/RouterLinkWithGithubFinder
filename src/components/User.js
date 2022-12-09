import React from 'react'

const User = (props) => {
    const {login,avatar_url}=props.user
  return (
    
            <div className="col-md-4 my-3">
                <div className="card firstcard">
                    <img src={avatar_url} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                    </div>
                </div>
            </div>
        
      
  
  )
}

export default User
