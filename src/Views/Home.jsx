import React from 'react'
import Video_Frame from '../componets/Home_Componets/Video_Frame'
import About_Frame from '../componets/Home_Componets/About_Frame'
import Experties_Frame from '../componets/Home_Componets/Experties_Frame'
import Card_Frame from '../componets/Home_Componets/Card_Frame'
import Gallary_Frame from '../componets/Home_Componets/Gallary_Frame'
import ContactUs_Frame from '../componets/Home_Componets/ContactUs_Frame'
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <>
   
    <Container fluid className='p-0 m-0' >
      <Video_Frame />
      <About_Frame />
      <Experties_Frame />
      <Card_Frame />
      <Gallary_Frame />
      <ContactUs_Frame />
    </Container>
  </>
  )
}

export default Home