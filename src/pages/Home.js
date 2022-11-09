import React from 'react'
import Nav from '../components/Nav'
import '../App.scss'
import Explanation from '../components/Explanation'

const Home = () => {
  return (
    <>
    <Nav />
    <div className="explanation_content"><Explanation/></div>
    
    </>
  )
}

export default Home