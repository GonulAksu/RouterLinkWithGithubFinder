import React from 'react'
import Loading from './Loading'
import User from './User'
const Users = (props) => {
    // console.log(props.users);
    console.log(props.loading);

  
  return (
    
    <div>
        {
        props.loading ? <Loading></Loading>:
        <div className='container '>
        <div className="row">
            {props.users.map((user,index)=>{
             return <User key={index} user={user}></User>
                })
            }  
            </div>
          </div>   
        }

      
     </div>
  )
    
}

export default Users
