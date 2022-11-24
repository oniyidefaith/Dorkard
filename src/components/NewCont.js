import React from 'react'
import {Link } from 'react-router-dom'
import kente_home from '../images/kente_home.jpg'

const NewCont = () => {
  return (
    <>
    <div className='new-cont-flex'>  
    <img src={kente_home} className='explanation_img hover_img' alt=''/>

        <div className='newConst_txt'>
      <h2 className='header_txt'>Custom made dresses for men and women</h2>
      <p>We make well defining dresses based on the need of consumers. Customer satisfaction is our priority , giving you what you need when you need it and where you need it .</p>
      <Link to={'Shop/'} className='btn_link'><span className='span'>Shop</span></Link>
      </div>
    </div>
    </>
  )
}

export default NewCont
