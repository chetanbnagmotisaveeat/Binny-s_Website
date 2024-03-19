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
      <Container fluid className='p-0 w-0 position-relative  w-100 overflow-hidden mb-3'>
        < motion.div 
          className='home-main-div-margin-bottom-and-top background-image'
          >
          <Row className='d-flex flex-column align-items-center'>
            <Col className="text-center mt-3 carft-heading position-relative" >
              Crafting excellence since 1962
            </Col>

            <Col className="text-center position-relative mt-3 ">
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