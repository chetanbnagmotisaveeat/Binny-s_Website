import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/Women/Nacklace.css";
import "../../styles/Card_Frame.css"
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";



const imagesArray = [
  {
    id: 1,
    url: '../images/Women/Nacklace/Image-1.png',
    name: 'Ruby Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
  },
  {
    id: 2,
    url: '../images/Women/Nacklace/Image-2.png',
    name: 'Princess Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
  },
  {
    id: 3,
    url: '../images/Women/Nacklace/Image-3.png',
    name: 'Tear Drop Necklace',
    content: 'The necklace is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
  },
  {
    id: 4,
    url: '../images/Women/Nacklace/Image-4.png',
    name: 'Sapphire Necklace',
    content: 'The necklace in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
  },
  {
    id: 5,
    url: '../images/Women/Nacklace/Image-5.png',
    name: 'Choker Necklace',
    content: 'The necklace in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
  },
  {
    id: 6,
    url: '../images/Women/Nacklace/Image-6.png',
    name: 'Opera Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
  }
];


const Nacklace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = imagesArray[currentIndex];
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 border border-1 border-primary overflow-hidden"
      >
        <div className="p-3 home-about-main-div-margin-top text-light">
          <Row className="p-0 m-0">
            <Col
              lg={9}
              md={7}
              sm={12}
              xs={12}
              className="border border-1 border-parimary "

            >
              <div className="container">
                <div className="row d-flex">
                <div className="col-lg-12 image-name">
                    <motion.div
                      key={currentImage.id}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 30, opacity: 1 }}
                      transition={{ type: "spring", duration: 1, }}
                    >
                      <h3>{currentImage.name}</h3>
                    </motion.div>
                  </div>
                
                  {
                    isSmallScreen && (
                      <>
                      <motion.div className="half-circle w-100 mt-5 position-relative d-flex justify-content-center align-items-center overflow-hidden">
                {imagesArray.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="image-container"
                    initial={{
                      opacity: index === 0 ? 1 : 0,
                      x: 1000 / 2,
                      y: -1000 / 2,
                    }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      x: index === currentIndex ? 0 : Math.cos((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                      y: index === currentIndex ? 0 : Math.sin((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                    }}
                    transition={{ type: "spring", repeatType: "loop" }}
                    style={{ position: "absolute" }}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="rounded-circle img-fluid img-responsive"
                    />
                  </motion.div>
                ))}
              </motion.div>
                      
                      </>
                    )
                  }
                  
                  {
                     isSmallScreen && (
                      <div className="col-lg-12 mt-5  d-flex justify-content-between flex-wrap">
                      {imagesArray.map((image, index) => (
                        <>
                          <div className="d-flex flex-column">
  
                            <div key={image.id} className={`circle-container ${index === currentIndex ? 'active' : ''}`} onClick={() => handleImageClick(index)}>
                              <img src={image.url} alt={`Image ${image.id}`} className="rounded-circle img-fluid" />
                            </div>
                            <div>
  
                              {index === currentIndex && <hr className="decoration-line" />}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                     )
                  }
                 
                  <div className="col-lg-12 mb-5 mt-5 content-container">
                    <div style={{ overflowX: "hidden", marginTop: '50px' }}>
                      <motion.div
                        key={currentImage.id}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 3, repeatType: "alternate" }}

                      >
                        <p>{currentImage.content}</p>
                      </motion.div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-5">
                    <Button variant="outline-light" className='button-subContent outline-none btn-larger' style={{ borderRadius: '100px' }}>
                      Discover More
                    </Button>
                  </div>
                  {
                    !isSmallScreen && (
                      <div className="col-lg-12 mt-5  d-flex justify-content-between flex-wrap">
                      {imagesArray.map((image, index) => (
                        <>
                          <div className="d-flex flex-column">
  
                            <div key={image.id} className={`circle-container ${index === currentIndex ? 'active' : ''}`} onClick={() => handleImageClick(index)}>
                              <img src={image.url} alt={`Image ${image.id}`} className="rounded-circle img-fluid" />
                            </div>
                            <div>
  
                              {index === currentIndex && <hr className="decoration-line" />}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    )
                  }
                 
                </div>
              </div>
            </Col>
          
          {
            !isSmallScreen && (
               <>
                <Col
              lg={3}
              md={5}
              sm={12}
              xs={12}
              className="border border-1 border-primary position-relative order-2 order-md-2 img-col"


            >
              <motion.div className="half-circle h-100 w-100 position-relative d-flex justify-content-center align-items-center overflow-hidden">
                {imagesArray.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="image-container"
                    initial={{
                      opacity: index === 0 ? 1 : 0,
                      x: 1000 / 2,
                      y: -1000 / 2,
                    }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      x: index === currentIndex ? 0 : Math.cos((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                      y: index === currentIndex ? 0 : Math.sin((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                    }}
                    transition={{ type: "spring", repeatType: "loop" }}
                    style={{ position: "absolute" }}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="rounded-circle img-fluid img-responsive"
                    />
                  </motion.div>
                ))}
              </motion.div>




            </Col>
               
               </>
            )
          }

           
          </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Nacklace;
