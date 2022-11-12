import React from 'react'

const Quadrant = () => {
  const designs=[
    {
      text:'Excellent cutting',
      image:'https://cdn.shopify.com/s/files/1/0559/0505/8894/files/icon01_300x300.png?v=1654762497',

    },
    {
      text:'Quality Fabrics',
      image:'https://cdn.shopify.com/s/files/1/0559/0505/8894/files/icon02_300x300.png?v=1654762507',
    },
    {
      text:'Expert Tailoring',
      image:'https://cdn.shopify.com/s/files/1/0559/0505/8894/files/icon03_300x300.png?v=1654762517',
    },
    {
      text:' Quality Dresses ',
      image:'https://cdn.shopify.com/s/files/1/0559/0505/8894/files/icon04_300x300.png?v=1654762525',
    }
  ]

const text_design = designs.map(items=>
  <div className='parent'>
          <div className='grid-item'>
          <img src={items.image} alt=''/>
          <h2 className='bordered'>{items.text}</h2>
          </div>
        </div>
    )
  return (
    <>
    {text_design}
    </>
  )
}

export default Quadrant