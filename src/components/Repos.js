import React from 'react'
import Repo from './Repo'

const Repos = (props) => {
  return (
    <>
      { props.userRepos.map((repo,index)=>{
        return <Repo key={index} repo={repo}></Repo>
    })}
    </>
   
  )
}

export default Repos
