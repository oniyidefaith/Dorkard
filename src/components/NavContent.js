import React from 'react'
import { Link } from 'react-router-dom'

const NavContent = () => {
  
  const links = ['Shop', 'About', 'Contact']
  const LinkList = links.map(lists => <Link className='BlockView' to={lists + '/'}>{lists}</Link>)
  return (
    <div className='BlockView'>
      Home
      {LinkList}
    </div>
  )
}

export default NavContent