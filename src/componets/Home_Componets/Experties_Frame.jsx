import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/Home.css";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiperStyle.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useMediaQuery } from "react-responsive";

const imagesArrya = [
  { id: 1, url: '../images/Experties/Image-1.png' },
  { id: 2, url: '../images/Experties/Image-2.png' },
  { id: 3, url: '../images/Experties/Image-3.png' },
  { id: 4, url: '../images/Experties/Image-4.png' },
  { id: 5, url: '../images/Experties/Image-5.png' },
  { id: 6, url: '../images/Experties/Image-2.png' },
  { id: 7, url: '../images/Experties/Image-1.png' },
  { id: 8, url: '../images/Experties/Image-3.png' },
]


const Experties_Frame = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 overflow-hidden"
      >
        <div className="p-3 home-main-div-margin-bottom-and-top">
          <Row className="p-0 m-0">
            <Col className="home-heading ">
              Expertise
            </Col>
          </Row>
          <Row className="p-0 m-0">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="order-2 order-md-1 home-about-col-pading "
            >
              <div className="d-flex flex-column justify-content-center align-items-center home-subContent home-main-div-margin-bottom-and-top" style={isSmallScreen ? { textAlign: 'justify' } : { textAlign: 'justify' }}>
                <p>
                  Explore Binny's exquisite collections, where timeless elegance
                  meets contemporary craftsmanship. Discover a curated selection
                  of our finest jewelry pieces, meticulously crafted to
                  perfection. Each design is a testament to our dedication to
                  transcending traditional boundaries and redefining luxury
                  adornments. From dazzling diamond rings to intricate
                  necklaces, bracelets to beautiful earring and mangalsutra to
                  add bling in your everyday wear, to accessories that reflect
                  and shine your personalities with diamonds. our collections
                  showcase the finest materials and exquisite detailing.
                </p>
                <p>
                  Indulge in the allure of our signature pieces, each telling a
                  unique story of sophistication and style. Whether you're
                  searching for a statement piece for a special occasion or a
                  timeless everyday accessory, our collections offer something
                  to elevate every moment. Immerse yourself in the beauty of
                  Binny's jewelry and find the perfect expression of your
                  individuality and taste.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="home-about-col-pading order-1 order-md-2 d-flex justify-content-center align-items-center"
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 1,
                  depth: 125,
                  modifier: 2,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <div>
                  {
                    imagesArrya.map((image, index) => {
                      return (
                        <>
                          <SwiperSlide key={image.id + index}>
                            <img src={image.url}  
                             style={{
                              borderRadius: '25px',
                              height:'350px'
                            }}
                            
                            />
                          </SwiperSlide>
                        </>
                      )
                    })
                  }

                </div>

              </Swiper>


            </Col>
          </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Experties_Frame;
