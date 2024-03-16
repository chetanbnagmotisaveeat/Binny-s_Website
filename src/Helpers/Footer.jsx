import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../App.css'
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container fluid className='footer-main-div'>
      {
    !isSmallScreen && (
      <>
       <Row className='p-0 m-0 w-75'>
          <Col xs={6} md={12} lg={3}  className="d-flex position-relative p-0 m-0 w-100">
            <Container className='' >
              <Row className='text-light p-3'>
                <Col  xs={3} md={3} lg={3} sm={6} className='footer-gap'>
                  <div className=''>Services</div>
                  <div className='second-div'>
                    <ol>
                      <li> Book an appointment</li>
                    </ol>
                  </div>

                </Col>
                <Col xs={3} md={3} lg={3} sm={6} className='footer-gap'>
                  <div  className=''>Corporate</div>
                  <div  className='second-div'>
                    <ol>
                      <li>Careers</li>
                    </ol>
                  </div>

                </Col>
                <Col xs={3} md={3} lg={3} sm={6} className='footer-gap'>
                  <div className=''>Legal Terms</div>
                  <div className='second-div'>
                    <ol>
                      <li>Terms of Use</li>
                      <li>Privacy Policy</li>
                    </ol>
                  </div>

                </Col>
                <Col xs={3} md={3} lg={3} sm={6} className='footer-gap '>
                  <div className=''>About Us</div>
                  <div className='second-div '>
                    <ol>
                      <li>About Us</li>
                      <li>Our Story</li>
                    </ol>
                  </div>

                </Col>
              </Row>
              <Row className='p-3 footer'>
                <Col className='text-light d-flex flex-column justify-content-start align-items-start footer-gap'>
                  <div className=''>Follow Us</div>
                  <div className="icon  w-25">
                    <i className="bi bi-facebook ml-3" ></i>
                    <i className="bi bi-twitter ml-3"></i>
                    <i className="bi bi-instagram ml-3" ></i>
                    <i className="bi bi-linkedin" ></i>
                  </div>

                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      
      </>
    )
  }
       
  
        <Row className='footer-last-row mt-4'>
          <Col className='design'>
            Design & Developed :  Binny’s World
          </Col>
          <Col className='copyRight'>
            Copyright © 2024 All Rights Reserved.
          </Col>
        </Row>
      </Container>


    </ThemeProvider>
  )
}

export default Footer