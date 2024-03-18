import React, {useState, useRef } from 'react';
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
import { useMediaQuery } from "react-responsive";
import { useEffect } from 'react';


const Gallary_Frame = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    console.log("Before setIsAutoplayEnabled(false):", isAutoplayEnabled);
    setIsAutoplayEnabled(false);
    console.log("After setIsAutoplayEnabled(false):", isAutoplayEnabled);
  };
  

  const handleMouseLeave = () => {
    console.log("Inter")
    setIsAutoplayEnabled(true);
    setHoveredIndex(null);
  };
  
  useEffect(() => {
    console.log("useEffect triggered");
    console.log("isAutoplayEnabled", isAutoplayEnabled);
  }, [isAutoplayEnabled]);
  
  
  const imagesArray = [
    { id: 1, url: '../images/Curoals/Image-1.png',name:'Image-1' },
    { id: 2, url: '../images/Curoals/Image-2.png' ,name:'Image-2'},
    { id: 3, url: '../images/Curoals/Image-3.png',name:'Image-3' },
    { id: 4, url: '../images/Curoals/Image-4.png',name:'Image-4' },
    { id: 5, url: '../images/Curoals/Image-5.png',name:'Image-5' },
    { id: 6, url: '../images/Curoals/Image-2.png',name:'Image-6' },
    { id: 7, url: '../images/Curoals/Image-3.png' ,name:'Image-7'},
    { id: 8, url: '../images/Curoals/Image-4.png',name:'Image-8' },
  ];

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container fluid className='position-relative overflow-hidden' >
        <div className='home-main-div-margin-bottom-and-top'>

      <Row className="p-0 m-0 ">
            <Col className="home-heading home-main-div-margin-bottom-and-top">
              Gallery
            </Col>
      </Row>
        <Row className='' >
          <Col xs={12} md={12} lg={12} className="position-relative" >
            <Swiper
             
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={isSmallScreen ? 'auto':5} 
              coverflowEffect={{
                rotate: 0,
                stretch: -28,
                depth: 47,
                modifier: 5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: isAutoplayEnabled,
                enabled: isAutoplayEnabled,
              }}
              // pagination={true}
              loop={true}
              // modules={[isAutoplayEnabled ?Autoplay:'', EffectCoverflow, Pagination, Navigation]}
              modules={[
                isAutoplayEnabled ? Autoplay : null,
                EffectCoverflow,
                Pagination,
                Navigation
              ].filter(Boolean)}
              
              className=""
              // style={{ width: '100%', height: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {imagesArray.map((image, index) => (
                  <SwiperSlide key={image.id + index}>
                    <div 
  onMouseEnter={() => handleMouseEnter(index)}
  onMouseLeave={() => handleMouseLeave()}
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
                          border: hoveredIndex === index ? '1px solid red' : 'none' 
                        }}
                      />
                      {hoveredIndex === index && (
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '5px' }}>
                          {image.name}
                        </div>
                      )}
                    </div>
                    {/* <img
                      src={image.url}
                      alt={`Image ${image.id}`}
                      style={{
                        objectFit: 'cover',
                        maxWidth: '100%', 
                        height: '100%',  
                        borderRadius: '20px',
                        border:index ==  3 ? '1px solid red':'none' 
                      }}
                    /> */}
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