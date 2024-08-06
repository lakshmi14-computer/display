import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  
  return (
    <div>
    <MDBNavbar light bgColor='info'>
       <MDBContainer fluid>
         <MDBNavbarBrand href='#' className='text-dark fw-bolder'>
           <img
             src='https://i.pinimg.com/originals/d3/01/fd/d301fdc8f718cc4e956c6456eb2af1ee.gif'
             height='30'
             alt=''
             loading='lazy'
           />
         Show Text
         </MDBNavbarBrand>
       </MDBContainer>
     </MDBNavbar>
   </div>
 )
}

export default Header
