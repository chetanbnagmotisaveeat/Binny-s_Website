import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../../styles/Home.css'

const ContactUs_Frame = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Container fluid className='p-0 m-0 position-relative  w-100' style={{ height: '100vh' }}>
      <Row className='p-0 m-0 '>
        <Col xs={12} md={12} lg={12} className="position-relative p-0 m-0">
        
        
        </Col>
      </Row>
    </Container>

  </ThemeProvider>
  )
}

export default ContactUs_Frame