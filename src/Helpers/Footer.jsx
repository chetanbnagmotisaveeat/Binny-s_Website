import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../App.css'
import { useMediaQuery } from "react-responsive";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container fluid className='footer-main-div mt-2'>
        {
          !isSmallScreen ?  (
            <>
              <Row className='p-0 m-0 w-75'>
                <Col xs={6} md={12} lg={3} className="d-flex position-relative p-0 m-0 w-100">
                  <Container className='' >
                    <Row className='text-light p-3'>
                      <Col xs={3} md={3} lg={3} sm={6} className='footer-gap'  >
                        <div className='footer-gap-div'>
                          <div className='heading' >Services</div>
                          <div className='second-div'>
                            <ol>
                              <li><NavLink to="/book-an-appointment">Book an appointment</NavLink></li>
                            </ol>
                          </div>
                        </div>


                      </Col>
                      <Col xs={3} md={3} lg={3} sm={6} className='footer-gap'>
                        <div className='footer-gap-div'>
                        <div className='heading'>Corporate</div>
                        <div className='second-div'>
                          <ol>
                            <li><NavLink to="/careers">Careers</NavLink></li>
                          </ol>
                        </div>

                        </div>

                      </Col>
                      <Col xs={3} md={3} lg={3} sm={6} className='footer-gap'>
                        <div  className='footer-gap-div'>
                        <div className='heading'>Legal Terms</div>
                        <div className='second-div'>
                          <ol>
                          
                            <li><a href='https://www.canva.com/design/DAGAle3FpjA/GM9Ucie0gG7ZO8k4CFoswA/view?utm_content=DAGAle3FpjA&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" >Terms of Use</a></li>
                            <li><a href='https://www.canva.com/design/DAGAlHvNJ3c/uFneNodxnB_LwNbWSEa7nQ/view?utm_content=DAGAlHvNJ3c&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" >Privacy Policy</a></li>
                          </ol>
                        </div>
                        </div>
                       

                      </Col>
                      <Col xs={3} md={3} lg={3} sm={6} className='footer-gap '>
                        <div className='footer-gap-div'>
                        <div className='heading'>About</div>
                        <div className='second-div '>
                          <ol>
                            <li>About Us</li>
                            <li>History</li>
                          </ol>
                        </div>
                        </div>
                        

                      </Col>
                    </Row>
                    <Row className='p-3 footer'>
                      <Col className='text-light  footer-gap' > 
                      <div className='footer-gap-icon'>
                      <div className='heading'>Follow Us</div>
                        <div className="icon  w-25">
                          <a href='https://www.instagram.com/binnysjewellery/?hl=en' target="_blank" ><i className="bi bi-facebook ml-3" ></i></a>
                          <i className="bi bi-twitter ml-3" style={{color:'#fff'}}></i>
                          <i className="bi bi-instagram ml-3"  style={{color:'#fff'}}></i>
                          <i className="bi bi-linkedin"  style={{color:'#fff'}}></i>
                        </div>
                      </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>

            </>
          ):(
            <>
          
                    <Row className='w-100 mt-4 text-light' style={{gap:'3.1rem'}}>
                    <Col  className='footer-gap'  >
                      <div className='footer-gap-div-small'>
                        <div className='heading' >Services</div>
                        <div className='second-div'>
                          <ol>
                            <li><NavLink to="/book-an-appointment">Book an appointment</NavLink></li>
                          </ol>
                        </div>
                      </div>


                    </Col>
                    <Col className='footer-gap'>
                      <div className='footer-gap-div-small'>
                      <div className='heading'>Corporate</div>
                      <div className='second-div'>
                        <ol>
                          <li><NavLink to="/careers">Careers</NavLink></li>
                        </ol>
                      </div>

                      </div>

                    </Col>
                    </Row>
                    <Row className='w-100 mt-5  text-light ' style={{gap:'3.1rem'}}>
                    <Col   className='footer-gap '>
                      <div  className='footer-gap-div-small'>
                      <div className='heading'>Legal Terms</div>
                      <div className='second-div'>
                        <ol>
                        
                          <li><a href='https://www.canva.com/design/DAGAle3FpjA/GM9Ucie0gG7ZO8k4CFoswA/view?utm_content=DAGAle3FpjA&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" >Terms of Use</a></li>
                          <li><a href='https://www.canva.com/design/DAGAlHvNJ3c/uFneNodxnB_LwNbWSEa7nQ/view?utm_content=DAGAlHvNJ3c&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" >Privacy Policy</a></li>
                        </ol>
                      </div>
                      </div>
                     

                    </Col>
                    <Col className='footer-gap '>
                     
                      <div className='footer-gap-div-small'>
                      <div className='heading'>About</div>
                      <div className='second-div'>
                        <ol>
                          <li>About Us</li>
                          <li>History</li>
                        </ol>
                      </div>
                      </div>
                    </Col>

                    </Row>
                
                  <Row className='w-100 mt-5 mb-5 text-light' style={{gap:'3.1rem'}}>
                    
                    <Col className='footer-gap ' > 
                    <div className='footer '>
                    <div className='footer-gap-icon-small '>
                    <div className='heading'>Follow Us</div>
                      <div className="icon  w-25">
                        <a href='https://www.instagram.com/binnysjewellery/?hl=en' target="_blank" ><i className="bi bi-facebook ml-3" ></i></a>
                        <i className="bi bi-twitter ml-3" style={{color:'#fff'}}></i>
                        <i className="bi bi-instagram ml-3"  style={{color:'#fff'}}></i>
                        <i className="bi bi-linkedin"  style={{color:'#fff'}}></i>
                      </div>
                    </div>

                    </div>
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