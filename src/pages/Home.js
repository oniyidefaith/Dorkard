import React from 'react'
import Nav from '../components/Nav'
import '../App.scss'
import Explanation from '../components/Explanation'
import Quadrant from '../components/Quadrant'
import NewCont from '../components/NewCont'
import ContentTwo from '../components/ContentTwo'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className="content">
    <Nav />
    <div className="explanation_content"><Explanation/></div>
    <div className='quadrant'><Quadrant/></div>
    <div className='new_content'><NewCont/></div>
    <div className='new_content'><ContentTwo/></div>
    <div className='footer'><Footer/></div>
    </div>
    </>
  )
}

export default Home