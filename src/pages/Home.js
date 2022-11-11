import React from 'react'
import Nav from '../components/Nav'
import '../App.scss'
import Explanation from '../components/Explanation'
import Quadrant from '../components/Quadrant'

const Home = () => {
  return (
    <>
    <div className="content">
    <Nav />
    <div className="explanation_content"><Explanation/></div>
    <div className='quadrant'><Quadrant/></div>
    </div>
    </>
  )
}

export default Home