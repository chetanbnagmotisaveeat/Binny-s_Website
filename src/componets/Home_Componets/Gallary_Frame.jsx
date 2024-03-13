import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import SwiperComponet from '../../Helpers/SwiperComponet';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiperStyle.css';
import '../../styles/Gallary_Frame.css'

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Gallary_Frame = () => {

  const imagesArray = [
    { id: 1, url: '../images/Curoals/Image-1.png' },
    { id: 2, url: '../images/Curoals/Image-2.png' },
    { id: 3, url: '../images/Curoals/Image-3.png' },
    { id: 4, url: '../images/Curoals/Image-4.png' },
    { id: 5, url: '../images/Curoals/Image-5.png' },
    { id: 6, url: '../images/Curoals/Image-2.png' },
    { id: 7, url: '../images/Curoals/Image-3.png' },
    { id: 8, url: '../images/Curoals/Image-4.png' },
  ];

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container fluid className='position-relative overflow-hidden w-100 border border-1 border-primary' >
        <div className='home-main-div-margin-bottom-and-top'>

      <Row className="p-0 m-0 ">
            <Col className="home-heading home-main-div-margin-bottom-and-top  border border-1 border-parimary">
              Gallery
            </Col>
      </Row>
        <Row className='p-0 m-0 w-100 ' >
          <Col xs={12} md={12} lg={12} className="position-relative w-100 " >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'} // Adjust number of visible slides automatically
              coverflowEffect={{
                rotate: 0,
                stretch: -30,
                depth: 50,
                modifier: 4,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={true}
              loop={true}
              modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
              className="mySwiper border border-1 border-warning mt-2 mb-2"
              style={{ width: '100%', height: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {imagesArray.map((image, index) => (
                  <SwiperSlide key={image.id + index} style={{ margin: "10px" }}> {/* Adjust margin for spacing */}
                    <img
                      src={image.url}
                      alt={`Image ${image.id}`}
                      style={{
                        objectFit: 'cover',
                        maxWidth: '100%', // Ensure image doesn't exceed container width
                        height: 'auto',  // Maintain aspect ratio
                        borderRadius: '25px',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>


          </Col>
        </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Gallary_Frame;
