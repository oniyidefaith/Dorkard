import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='upper_footer'>
        <h1 className='logo_name'>Drockard</h1>
        <div className='info_footer'>
            <p>no:Arizona usa</p>
            <p>E-mail:drockard@gmail.com</p>
        </div>
        <p>Phones:0000 -123 -2342</p>
        <div className='icons'>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-whatsapp"></ion-icon>
        </div>
        <hr className='hr'/>
        <div>
          <i class="fa fa-copyright" aria-hidden="true"></i>
          Code_doddle 
          <div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
