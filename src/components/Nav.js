import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerBar from './BurgerBar'
import ForwardBtn from '../images/Vector.png'
import Fade from 'react-reveal/Fade';
import Img from '../images/bg.png'
import ImgTwo from '../images/event_dresses.jpg'





const Nav = (props) => {
    const links = ['Shop', 'About', 'Contact']
    const [count, setCount] = useState(0)

    const content = [
        {
            id: 0,
            className:'landing_content',
            header_text: 'Fashionable Designs and Material',
            header_par: 'we offer our customer the best user service offering the best user design and material and tailoring',
            img: Img
        },
        {
            id: 1,
            className:'landing_content_two',
            header_text: 'Rent Dresses for different event',
            header_par: 'We offer rentage and sales on ready made wedding and baby shower design and dresses', img: ImgTwo
        }

    ]
    const [current, setCurrent] = useState(0);
    const length = content.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

  

    if (count === 2) {
        setCount(0)

    }
    const LinkList = links.map(lists => <Link className='nav_link' to={lists + '/'}>{lists.toLocaleLowerCase()}</Link>)
    return (
        <>
            <div className="nav_flex">
                <div className='Logo'>
                    <p className='name'>Drockard</p>
                    <div className='LogoCounter'>
                        <span className='headCount'>{'0' + count}</span>/
                        <span className='miniCount'>01</span>
                    </div>
                    <img src={ForwardBtn} onClick={() => { setCount(count + 1); nextSlide(); }} className="forward" alt="" />
                </div>
                <div className="nav_list nav_link">
                    Home
                    {LinkList}
                </div>
                <div className="icons">
                    <div className="mini_icons">
                        <i class="fa fa-heart fs-4" aria-hidden="true" />
                        <i class="fa fa-cart-plus fs-4" aria-hidden="true" />
                    </div>

                    <div>

                    </div>
                </div>
                <BurgerBar list={LinkList} />
            </div>
            
            <div className="home_content">
    
                {content.map((content, index) => {
                    return (
                    <div className={content.className} key={content.index}>
                          {index === current && ( 
                        <>
                        <Fade left>
                            <div className="landing_txt">
                                <p className="header_text">{content.header_text}</p>
                                <p className="header_par">{content.header_par}</p>
                                <div class="wrapper">
                                    <Link to={'Shop/'} className='btn_link'><span className='span'>Shop</span></Link>
                                </div>
                            </div>
                        </Fade>

                            <img src={content.img} className="landing_bg" alt="" />
                       </>)}
                    </div>)
                })}


            </div>
            <div className="media_content">
        <p className="description">Follow us __________
        <ion-icon name="logo-instagram"></ion-icon><ion-icon name="logo-facebook"></ion-icon>
        </p> 
        </div>
        </>
    )
}

export default Nav