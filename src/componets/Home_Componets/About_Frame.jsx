import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/Home.css";
import { useMediaQuery } from "react-responsive";
import AboutPara from "./AboutPara";

const About_Frame = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent); // Toggle the value of showFullContent
  };
 
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 overflow-hidden"
      >
        <div className="p-3 home-about-main-div-margin-top" >
          <Row className="p-0 m-0">
            <Col className="home-heading ">
              About Us
            </Col>
          </Row>
          <Row className="p-0 m-0">
            <Col
              xs={12}
              sm={12}
              md={7}
              lg={7.5}
              className="order-2 order-md-1 home-about-col-pading "
            >
              <motion.div
                  
                 className="d-flex flex-column justify-content-center align-items-center home-subContent h-100" 
                 style={isSmallScreen ? { textAlign: 'justify' } : { textAlign: 'justify' }}
                 initial={{
                  opacity: 0,
                  scale: 0,
                  x: 100,
                 }}
                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
                 viewport={{ once: true }}
                  // whileHover={{ scale: 1.005 }}
                transition={{ duration: 1 }}
                 >
                 <AboutPara />
               
              </motion.div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={4.5}
              className="home-about-col-pading order-1 order-md-2 d-flex justify-content-center align-items-center"
            >
              <motion.div
                style={{
                  padding: "30px",
                  position: "relative", 
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 100,
                 }}
                 whileInView={{ opacity: 1, scale: 1, x: 0 }}
                 viewport={{ once: true }}
                  // whileHover={{ scale: 1.005 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src="/images/rotation.png"
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    rotate: "90deg",
                  }}
                  animate={{
                    rotate: [180, -180],
                    transition: {
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
                <motion.img
                  className="rounded-circle"
                  src="/images/ring.png"
                  style={{
                    position: "absolute", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    maxWidth: "50%",
                    maxHeight: "50%", 
                    width: "auto", 
                    height: "auto", 
                  }}
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default About_Frame;
