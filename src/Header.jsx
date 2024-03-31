import React from 'react'
import './Header.css'
import logo from './Assets/logo1.gif'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
<>
<MDBNavbar  light bgColor='secondary'>
        <MDBContainer  className='Nav'  fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='50'
              alt=''
              loading='lazy'
            />
            <h2 style={{fontFamily:"cursive", color:"white", fontSize:"20px",fontWeight:"500"}}>Shopify</h2>
          </MDBNavbarBrand>
          <div className='d-flex  justify-content-between'>
      <button  variant="outline" className='btn ' ><i class="fa-solid fa-heart" style={{color: 'white'}}></i> </button>
        <button variant="outline" className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: 'white'}}></i> </button>

       </div>
        </MDBContainer>
       
      </MDBNavbar>





</>
  )
}

export default Header