import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


const LandingPage = (props) => {

    return (
        <>
            <div className="home_content">
                {/* <div className="media_content">
        <p className="description">Follow us __________</p> 
        <ul className='social_list'>
         <li><ion-icon name="logo-facebook"></ion-icon></li>
         <li><ion-icon name="logo-instagram"></ion-icon></li>
        </ul>
        </div> */}
        <Fade left>
                <div className="landing_txt">
                    <h2 className="header_text">{props.header}</h2>
                    <p className="header_par">{props.par}</p>
                    
                </div>
                </Fade>
                <Link className='shop_link'>Shop</Link>
                <Fade right>
                <img src={props.Img} className="landing_bg" alt="" />
                </Fade>

            </div>
        </>
    )
}

export default LandingPage