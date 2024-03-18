import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import '../../styles/Card_Frame.css'
import { Button } from 'react-bootstrap';
import {motion} from 'framer-motion';


const Card_Frame = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container fluid className='p-0 m-0 position-relative  w-100 overflow-hidden'>
        < motion.div 
          className='home-main-div-margin-bottom-and-top'
          initial={{
            opacity: 0,
            scale: 0,
            x: 50,
           }}
           whileInView={{ opacity: 1, scale: 1, x: 0 }}
            // whileHover={{ scale: 1.005 }}
          transition={{ duration: 1 }}
          >
          <Row className='d-flex flex-column align-items-center background-image'>
            <Col className="text-center mt-3 carft-heading position-relative" >
              Crafting excellence since 1962
            </Col>

            <Col className="text-center position-relative ">
              <Button variant="outline-light" className='m-4 carft-subContent outline-none btn-larger' style={{ borderRadius: '100px' }}>
                Discover More
              </Button>
            </Col>

          </Row>

        </motion.div>

      </Container>

    </ThemeProvider>
  )
}

export default Card_Frame