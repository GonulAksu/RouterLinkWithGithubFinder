import React from 'react'
import { Link } from 'react-router-dom'
const User = (props) => {
    const {login,avatar_url}=props.user
  return (
    
            <div className="col-md-4 my-3">
                <div className="card firstcard">
                    <img src={avatar_url} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        {/* react-router-dom,sağladıgı Link veya NavLink 'lerini button veya <a> etiketine cevirebiliyoruz 
                        ve username' göre apiden data almak için users apisi içinde gelen login'i kullanacağım*/}
                        <Link to={`/getuser/${login}`} className='btn btn-info btn-sm'>Go Profile</Link>

                    </div>
                </div>
            </div>
        
      
  
  )
}

export default User
