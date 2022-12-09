import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const Nav = (props) => {
  return (
    <>
        <nav className='navbar navbar-dark bg-dark'>
                <div className="container-fluid">
                    <NavLink to="/" exact className="navbar-brand">
                      <i className={props.icon}></i>
                      {props.title}
                    </NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                          <NavLink to='about' className="nav-link" >About</NavLink>
                        </li>
                       
                    </ul>
                   
                </div>
        </nav>
    </>
  )
}

export default Nav
