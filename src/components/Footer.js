import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='upper_footer'>
        <h1 className='logo_name'>Drockard</h1>
        <div className='info_footer'>
            <p>Address: 1846 E Innovation Park Dr. Oro Valley, AZ 85755</p>
            <p>E-mail: info@drockard.com</p>
        </div><br/>
        <p>Phones: +1 708-781-6859</p>
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
