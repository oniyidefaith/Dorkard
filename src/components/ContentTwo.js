import React from 'react'
import {Link } from 'react-router-dom'
import content_two_img from '../images/content_two.jpg'

const ContentTwo = () => {
  return (
    <>
    <div className='new-cont-flex'>  

        <div className='newConst_txt'>
      <h2 className='header_txt'>Timeless Styles High-End Unisex Cloths</h2>
      <p>We Offer the latest timeless styles ever neatly designed dresses. to get you own dress go to the shop section to buy or rent modern asoebi (Native styles),wedding dresses and baby shower dresses</p>
      <Link to={'Shop/'} className='btn_link'><span className='span'>Shop</span></Link>
      </div>
      <img src={content_two_img} className='explanation_img_two hover_img' alt=''/>

    </div>
    </>
  )
}

export default ContentTwo