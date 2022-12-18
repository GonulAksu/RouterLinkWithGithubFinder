import React from 'react'

const Repo = ({repo}) => {
  return (
    <li className='list-group-item'>
            <i className="fa-solid fa-paw"></i> <a href={repo.html_url} className="link-info">{repo.name}</a>

    </li>
  )
}

export default Repo
