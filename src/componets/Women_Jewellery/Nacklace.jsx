import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/Women/Nacklace.css";
import "../../styles/Card_Frame.css"
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const imagesArray = [
    { id: 1, url: '../images/Experties/Rectangle-37.png', name: 'Image 1', content: 'Content 1' },
    { id: 2, url: '../images/Experties/Rectangle-38.png', name: 'Image 2', content: 'Content 2' },
    { id: 3, url: '../images/Experties/Rectangle-39.png', name: 'Image 3', content: 'Content 3' },
    { id: 4, url: '../images/Experties/Rectangle-40.png', name: 'Image 4', content: 'Content 4' },
    { id: 5, url: '../images/Experties/Rectangle-41.png', name: 'Image 5', content: 'Content 5' },
    { id: 6, url: '../images/Experties/Rectangle-37.png', name: 'Image 6', content: 'Content 6' },
  ];

const Nacklace = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds
    
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
              md={9}
              sm={12}
              xs={12}
              className="border border-1 border-parimary"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <h3>{currentImage.name}</h3>
                    <h3>Ruby Necklace</h3>
                    
                    
                    </div>
                  <div className="col-lg-12 w-75 pb-5 pt-5">
                 
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{currentImage.name}</h5>
      <p className="card-text">{currentImage.content}</p>
    </div>
  </div>


                  <p>{currentImage.content}</p>
                    <p>
                      This luxurious necklace features intricate silver
                      metalwork, elegantly framing three prominent red
                      gemstones. The centerpiece is a large teardrop shape,
                      flanked by two smaller oval stones. The meticulous
                      craftsmanship and opulent design make it a striking
                      accessory for special occasions.
                    </p>
                  </div>
                  <div className="col-lg-12">
                  <Button variant="outline-light" className='carft-subContent outline-none btn-larger' style={{ borderRadius: '100px' }}>
                    Discover More
                  </Button>

                  </div>
                  <div className="col-lg-12 mt-5 d-flex justify-content-between">
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




                
                </div>
              </div>
            </Col>
            <Col
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className="border border-1 border-primary position-relative"
              style={{ height: "90vh" }}
            >
              <div className="half-circle h-100 w-100 position-relative d-flex justify-content-center align-items-center overflow-hidden">
              <img
                  src={currentImage.url}
                  alt={currentImage.name}
                  className="rounded-circle img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Nacklace;
