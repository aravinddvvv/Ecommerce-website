import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from './Assets/logo1.gif'

function Footer() {
  return (
    <div>
      <MDBFooter style={{backgroundColor:"grey"}} bgColor='' className=' mt-3 text-center text-lg-start text-muted ' >
      

      <section className='mt-3'>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className=' text-light text-uppercase fw-bold mb-4'>
              <img
              src={logo}
              height='50'
              alt=''
              loading='lazy'
            />
                
                Shopify
              </h6>
              <p className='text-white'>
              Welcome to our vibrant e-commerce platform, where shopping meets convenience and style. Dive into a world of endless possibilities as you browse through our extensive collection of products, meticulously curated to cater to every taste and need.


    
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='text-light mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
              <a href='/' className='text-white' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
              <a href='/' className='text-white' style={{textDecoration:'none'}}>
                  React Bootsrap
                </a>
              </p>
              <p>
                <a href='/' className='text-white' style={{textDecoration:'none'}}>
                  Mdbootstrap
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6  style={{color:"white"}} className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <div>
              <div>
              <input className='mb-3 me-2 border rounded' type="text" placeholder='Enter Your Email ID' />
              <button style={{backgroundColor:'orange'}} className='border rounded'>Subscribe</button>
              
              </div>
              <div className=''>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          
          <a href='/' className='m-4 text-white '>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='m-4 text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          
        </div>
        </div>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'grey', color: 'black' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/' style={{textDecoration:'none'}}>
         Shopify.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer