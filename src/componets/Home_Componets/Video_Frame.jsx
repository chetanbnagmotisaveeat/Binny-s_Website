import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../../styles/Home.css'

const Video_Frame = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Container fluid className='p-0 m-0 position-relative  w-100' style={{ height: '100vh' }}>
      <Row className='p-0 m-0 '>
        <Col xs={12} md={12} lg={12} className="position-relative p-0 m-0">
          <video autoPlay loop muted playsInline className='w-100' style={{ objectFit: 'cover', height: '100vh' }}>
            <source src='/videos/Video_Home.mp4' type='video/mp4' />
          </video>
          <div className="overlay-text position-absolute bottom-0 start-0 text-start p-3 p-md-5 video-content-width">
            <Card className="p-0 m-0 bg-transparent border-0 video-content-width">
              <Card.Header className="p-0 m-0  border-0">
                <p className="m-0 text-white video-content">Crafting Perfection, Inspiring Brilliance</p>
              </Card.Header>
              <Card.Body  className='p-0 m-0' >
                <div className='video-content-sub'>
                  <p className="m-0 text-white">Elegance that adorns your everyday moments, in every way you wear it.</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>

  </ThemeProvider>
  );
};

export default Video_Frame;
