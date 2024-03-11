import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../../styles/Home.css";

const About_Frame = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container
        fluid
        className="p-0 m-0 w-100 border border-1 border-primary overflow-hidden"
      >
        <div className="p-3 home-about-main-div-margin-top" >
          <Row className="p-0 m-0">
            <Col className="home-heading border border-1 border-parimary">
              About Us
            </Col>
          </Row>
          <Row className="p-0 m-0">
            <Col
              xs={12}
              sm={12}
              md={7}
              lg={7.5}
              className="order-2 order-md-1 home-about-col-pading border border-1 border-primary"
            >
              <div className="text-left d-flex flex-column justify-content-center align-items-center home-subContent h-100">
                <p>
                  Welcome to Binny's, a legacy of elegance that has adorned
                  generations since 1962. With a rich heritage spanning 60
                  years, we take pride in crafting exquisite diamond and gold
                  jewellery that transcends time. Our unique designs seamlessly
                  blend tradition with modern trends, creating timeless pieces
                  that resonate with the essence of luxury.
                </p>
                <p>
                  At Binny's, we understand the artistry of jewellery-making,
                  and our collections reflect a harmonious fusion of modern
                  charm and contemporary allure. Each piece is meticulously
                  crafted to be an epitome of sophistication and opulence. Our
                  commitment to delivering uncompromised quality and
                  unparalleled craftsmanship has positioned Binny's as a trusted
                  name in the industry.
                </p>
                <p>
                  Indulge in the allure of our exclusive creations, where every
                  gemstone and metal is chosen with precision to ensure a
                  perfect blend of aesthetics and durability. Binny's, where
                  legacy meets luxury in a celebration of timeless beauty.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={4.5}
              className="home-about-col-pading order-1 order-md-2 d-flex justify-content-center align-items-center border border-1 border-primary"
            >
              <motion.div
                style={{
                  padding: "30px",
                  position: "relative", // Ensure relative positioning
                }}
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
                    position: "absolute", // Position the image absolutely
                    top: "50%", // Center vertically
                    left: "50%", // Center horizontally
                    transform: "translate(-50%, -50%)", // Adjust to center precisely
                    maxWidth: "50%", // Set maximum width
                    maxHeight: "50%", // Set maximum height
                    width: "auto", // Allow width to adjust based on aspect ratio
                    height: "auto", // Allow height to adjust based on aspect ratio
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