import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


const Footer = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
     <Container fluid className='p-0 m-0 d-flex flex-column position-relative w-100 border border-1 border-primary' style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Row className='p-0 m-0 w-75'>
    <Col xs={12} md={12} lg={12} className="d-flex position-relative p-0 m-0 w-100">
      <Container className='border border-1 border-warning' >
        <Row className='border border-1 border-warning' style={{ height: '25vh' }}>
        <Col className='border border-1 border-warning text-light d-flex flex-column justify-content-center'>
  <div className="text-left mb-2">Services</div>
  <div className="text-left">
    Book an appointment
  </div>
</Col> 
          <Col className='border border-1 border-warning text-light d-flex flex-column justify-content-center'>
          <div className="text-left mb-2">Corporate</div>
                  <div>
                  Careers
                  </div>
          </Col>
          <Col className='border border-1 border-warning text-light d-flex flex-column justify-content-center'>
          <div className="text-left mb-2">Legal Terms</div>
                  <div>
                  Terms of Use
                  </div>
                  <div>
                  Privacy Policy
                  </div>
          </Col>
          <Col className='border border-1 border-warning text-light d-flex flex-column justify-content-center'>
                  <div className="text-left mb-2">About Us</div>
                  <div>
                  Our Story
                  </div>
          </Col>
        </Row>
        <Row className='border border-1 border-warning' style={{ height: '25vh' }}>
        <Col className='border border-1 border-warning text-light d-flex flex-column justify-content-start align-items-start'>
  <div>Follow Us</div>
  <div className="d-flex align-items-center   w-25" style={{gap:'10px'}}>
  <i className="bi bi-facebook ml-3" ></i>
  <i className="bi bi-twitter ml-3"></i>
  <i className="bi bi-instagram ml-3" ></i>
  <i className="bi bi-linkedin" ></i>
</div>

</Col>



          {/* <Col className='border border-1 border-warning text-light d-flex align-items-center justify-content-start'>
            

          </Col> */}
        </Row>
      </Container>
    </Col>
  </Row>
  <Row className='p-0 m-0 w-100 d-flex justify-content-between' style={{ height: '10vh' }}>
  <Col className='border border-1 border-warning text-light d-flex align-items-end justify-content-start'>
  Design & Developed :  Binny’s World
  </Col>
  <Col className='border border-1 border-warning text-light d-flex align-items-end justify-content-end'>
  Copyright © 2024 All Rights Reserved.
  </Col>
</Row>
</Container>


    </ThemeProvider>
  )
}

export default Footer