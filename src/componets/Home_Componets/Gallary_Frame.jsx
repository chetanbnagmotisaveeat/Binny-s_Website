import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import '../../styles/swiperStyle.css';
import '../../styles/Gallary_Frame.css';

const Gallary_Frame = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsAutoplayEnabled(!isSmallScreen); // Autoplay enabled only on larger screens
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsAutoplayEnabled(true); // Autoplay enabled by default
  };

  const imagesArray = [
    { id: 1, url: '../images/Curoals/Image-1.png', name: 'Image-1' },
    { id: 2, url: '../images/Curoals/Image-2.png', name: 'Image-2' },
    { id: 3, url: '../images/Curoals/Image-3.png', name: 'Image-3' },
    { id: 4, url: '../images/Curoals/Image-4.png', name: 'Image-4' },
    { id: 5, url: '../images/Curoals/Image-5.png', name: 'Image-5' },
    { id: 6, url: '../images/Curoals/Image-2.png', name: 'Image-6' },
    { id: 7, url: '../images/Curoals/Image-3.png', name: 'Image-7' },
    { id: 8, url: '../images/Curoals/Image-4.png', name: 'Image-8' },
  ];

  return (
    <Container fluid className="position-relative overflow-hidden">
      <div className="home-main-div-margin-bottom-and-top">
        <Row className="p-0 m-0">
          <Col className="home-heading home-main-div-margin-bottom-and-top">Gallery</Col>
        </Row>
        <Row className="">
          <Col xs={12} md={12} lg={12} className="position-relative">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={isSmallScreen ? 'auto' : 5}
              coverflowEffect={{
                rotate: 0,
                stretch: -28,
                depth: 47,
                modifier: 5,
                slideShadows: false,
              }}
              autoplay={{
                delay: isSmallScreen ? (isAutoplayEnabled ? 8000 : null) : (isAutoplayEnabled ? 2000 : null),
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[
                isAutoplayEnabled ? Autoplay : null,
                EffectCoverflow,
                Pagination,
                Navigation,
              ].filter(Boolean)}
              className=""
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {imagesArray.map((image, index) => (
                  <SwiperSlide key={image.id + index}>
                    <motion.div
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      onTouchStart={() => handleMouseEnter(index)}
                      onTouchEnd={() => handleMouseLeave()}
                      whileHover={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                      style={{ position: 'relative' }}
                    >
                      <img
                        src={image.url}
                        alt={`Image ${image.id}`}
                        style={{
                          objectFit: 'cover',
                          maxWidth: '100%',
                          height: '100%',
                          borderRadius: '20px',
                          border: hoveredIndex === index ? '1px solid red' : 'none',
                        }}
                      />
                      {hoveredIndex === index && (
                        <div
                          style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            color: 'black',
                            fontWeight: 500,
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            padding: '5px',
                            borderRadius: '0px 0px 20px 20px',
                          }}
                        >
                          {image.name}
                        </div>
                      )}
                    </motion.div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Gallary_Frame;
