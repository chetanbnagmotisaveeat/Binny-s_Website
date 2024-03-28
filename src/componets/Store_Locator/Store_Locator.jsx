import React, { useState } from 'react';
import { Button, Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import '../../styles/Store.css';

const StoreLocator = () => {
    const locations = [
        {
            locationName: 'Mumbai',
            url: './images/Mumbai_Map.png',
            address: `Binny's jewellery boutique,14/A ,Ground Floor, Paper Box, Mahakali Caves Rd, Andheri East, Mumbai, Maharashtra 400093`,
            link: 'https://www.google.com/maps/place/Paper+Box+Company+of+India/@19.121398,72.8589272,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c9de14dcdf:0x26c02236ed2a4817!8m2!3d19.1213929!4d72.8615075!16s%2Fg%2F11fl7n3f_j?entry=ttu',
        },
        {
            locationName: 'Surat',
            url: './images/Surat_Map.png',
            address: `Binny's jewellery Boutique, Opp Science Center, City Light Rd, next to Sarvoday Bank, Surat, Gujarat 395007`,
            link: 'https://www.google.com/maps/place/Paper+Box+Company+of+India/@19.121398,72.8589272,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c9de14dcdf:0x26c02236ed2a4817!8m2!3d19.1213929!4d72.8615075!16s%2Fg%2F11fl7n3f_j?entry=ttu',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
        >
            <Container fluid className="text-light" style={{ marginTop: '60px' }}>
            <Row className="p-0 m-0 justify-content-start border border-1 border-primary">
    {locations.map((location, index) => (
        <Col key={index} lg={6} md={6} sm={12} xs={12} className="mb-3 border border-1 border-success">
            <div className="d-flex flex-column justify-content-start align-items-start w-100 border border-1 border-light">
                <Button
                    variant="outline-dark"
                    className="title mb-2"
                    active={currentIndex === index}
                    onClick={() => handleButtonClick(index)}
                >
                    {location.locationName}
                </Button>
                <div className="">
                    {currentIndex === index && (
                        <svg width="100" height="5" viewBox="0 0 50 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="5" rx="2.5" fill="#D9D9D9" />
                        </svg>
                    )}
                </div>
            </div>
        </Col>
    ))}
</Row>




                {currentIndex !== null && (
                    <>
                        <Row>
                            <Col>
                                <div className="mt-4">
                                    {locations[currentIndex].address}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mt-4">
                                    <img src={locations[currentIndex].url} alt={locations[currentIndex].locationName} className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default StoreLocator;
