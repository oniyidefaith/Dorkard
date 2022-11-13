import React from 'react'
import man_kente from '../images/man_kente_home.jpg'
import home_man from '../images/home_man.jpg'
import home_ankara from '../images/home_ankara.jpg'
import { Link } from 'react-router-dom'


const Explanation = () => {

  return (
    <>
    <div className='explain_container'>
    <div className='flexed_explain'> 
     <img src={man_kente} className='flexed_kente' alt="" />
      <img src={home_man} className='flexed_kente_mini' alt="" />
    
    </div>
    <div className='explain_txt'>
        <h2 className='header_txt'>Branded Dress</h2>
        <p className="par">We make and sell cool design using the best fabrics and best catalog, we receive contracts to make customized. we also make, sell and and rent beautiful dresses for your various event which include baby shower dresses and wedding dresses Native dresses across different states in Africa.</p>
        <Link to={'Shop/'} className='btn_link'><span className='span'>Shop</span></Link>

    </div>
<div>
    <img src={home_ankara} className="explanation_img" alt="" />
</div>
    </div>
    </>
  )
}

export default Explanation
