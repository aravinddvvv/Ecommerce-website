import React from 'react'

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import caro1 from './Assets/caro1.png'
import caro2 from './Assets/caro2.png'
import caro4 from './Assets/caro4.png'
import caro5 from './Assets/caro5.png'
import './Carosel.css'

function Carosel() {
  return (
    <>
   <MDBCarousel>
      <MDBCarouselItem itemId={1}>
        <img src={caro2} className='d-block w-100' alt='...' style={{height:"450px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={caro5} className='d-block w-100' alt='...' style={{height:"450px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={caro4} className='d-block w-100' alt='...' style={{height:"450px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={caro1} className='d-block w-100' alt='...' style={{height:"450px"}} />
      </MDBCarouselItem>
      
    </MDBCarousel>
    
    
    
    
    
    </>
  )
}

export default Carosel