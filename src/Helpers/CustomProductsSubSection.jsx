import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { motion } from "framer-motion";
import "../styles/Women/Nacklace.css";
import "../styles/Card_Frame.css"
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const CustomProductsSubSection = ({ data }) => {
    const { imagesArray, duration, heading, videoPath, content } = data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const isSmallScreen = useMediaQuery({ maxWidth: 764 });


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1));
        }, duration);

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
                className="p-0 m-0 w-100 overflow-hidden"
            >
                <div className="p-3 necklace-main-div-margin-top text-light">
                    <Row className="p-0 m-0">
                        <Col lg={12} className="necklace-heading mb-3">
                            {heading}
                        </Col>
                        <Col lg={12} className="necklace-heading" style={{ height: '70vh', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: '10px' }}>
                                <video autoPlay loop muted playsInline className='w-100 h-100' style={{ objectFit: 'cover', borderRadius: "10px" }}>
                                    <source src={videoPath} type='video/mp4' />
                                </video>
                            </div>
                        </Col>
                        <Col lg={12} className="">
                            <div className="necklace-sub-contain">
                                {content}
                            </div>

                        </Col>

                    </Row>
                    <Row className="p-0 m-0">
                        <Col
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                            className=""

                        >
                            <div className="container">
                                <div className="row d-flex">
                                    <div className="col-lg-12 image-name">
                                        <motion.div
                                            key={`${currentImage.id}-${currentImage.name}`}
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
                                                                scale: index === 0 ? 1.2 : 1,
                                                                x: 1000 / 2,
                                                                y: -1000 / 2,
                                                            }}
                                                            animate={{
                                                                opacity: index === currentIndex ? 1 : 0,
                                                                // scale: index === currentIndex ? 1.2 : 1,
                                                                x: index === currentIndex ? 0 : Math.cos((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                                                                y: index === currentIndex ? 0 : Math.sin((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                                                            }}
                                                            transition={{ type: "spring", damping: 20, repeatType: "loop" }}
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
                                                    <div key={image.id} className="d-flex flex-column">

                                                    <div  className={`circle-container ${index === currentIndex ? 'active' : ''}`} onClick={() => handleImageClick(index)}>
                                                        <img src={image.url} alt={`Image ${image.id}`} className="rounded-circle img-fluid" />
                                                    </div>
                                                    <div>
                                                        {index === currentIndex && (
                                                            <hr className="decoration-line" />
                                                        )}
                                                    </div>

                                                </div>
                                                )
                                                   
                                                )}
                                            </div>
                                        )
                                    }

                                    <div className="col-lg-12 content-container ">
                                        <div style={{ overflowX: "hidden", minHeight: '200px', overflowY: 'hidden' }}>
                                            <motion.div
                                                key={`content-container${currentImage.id}`}
                                                initial={{ x: -100, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ type: "spring", duration: 3, repeatType: "alternate" }}

                                            >
                                                <p>{currentImage.content}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 button-style">
                                        <Button variant="outline-light" className='button-subContent outline-none btn-larger' style={{ borderRadius: '100px' }}>
                                            Discover More
                                        </Button>
                                    </div>
                                    {
                                        !isSmallScreen && (
                                            <div className="col-lg-12 mt-5 d-flex justify-content-between flex-wrap">
                                                {imagesArray.map((image, index) => (
                                                    <div key={`${image.id}-${index}-${image.name}`} className="d-flex flex-column">
                                                        <div className={`circle-container ${index === currentIndex ? 'active' : ''}`} onClick={() => handleImageClick(index)}>
                                                            <img src={image.url} alt={`Image ${image.id}`} className="rounded-circle img-fluid" />
                                                        </div>
                                                        <div>
                                                            {index === currentIndex && <hr className="decoration-line" />}
                                                        </div>
                                                    </div>
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
                                        lg={4}
                                        md={4}
                                        sm={12}
                                        xs={12}
                                        className="position-relative order-2 order-md-2 img-col"
                                    >
                                        <motion.div className="half-circle h-100 w-100 position-relative d-flex justify-content-center align-items-center overflow-hidden">
                                            {imagesArray.map((image, index) => (
                                                <motion.div
                                                    key={`${image.id}-${index}-${image.name}`}
                                                    className="image-container"
                                                    initial={{
                                                        opacity: index === 0 ? 1 : 0,
                                                        scale: index === 0 ? 1.2 : 1,
                                                        // x: 1000 / 2,
                                                        // y: -1000 / 2,
                                                        // x:index === currentIndex ? 0: Math.cos((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                                                        // y:index === currentIndex ? 0 :  Math.sin((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2
                                                    }}
                                                    animate={{
                                                        opacity: index === currentIndex ? 1 : 0,
                                                        scale: index === currentIndex ? 1.2 : 1,
                                                        // x: index === currentIndex ? 0 : Math.cos((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                                                        // y: index === currentIndex ? 0 : Math.sin((index / (imagesArray.length - 1)) * Math.PI) * 1000 / 2,
                                                    }}
                                                    transition={{ type: "spring", damping: 20, repeatType: "loop"}}
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
    )
}

export default CustomProductsSubSection