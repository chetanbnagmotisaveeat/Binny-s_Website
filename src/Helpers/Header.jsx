import React, { useState } from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
    const [clickedCollection, setClickedCollection] = useState(false);
    const [rubberBracelets, setRubberBracelets] = useState(false);
    const [womenJewellery, SetwomenJewellery] = useState(false);
    const [menJewellery,setMenJewellery]=useState(false);

    const handleCollectionClick = () => {
        setClickedCollection(!clickedCollection);
    };

    const handleRubberBraceletsClick = () => {
        setRubberBracelets(!rubberBracelets);
    };

    const handleWomenJewelleryClick = () => {
        SetwomenJewellery(!womenJewellery);
    };

    const handleMenJewelleryClick = () => {
        setMenJewellery(!menJewellery);
    };

    return (
        <>
            <div className='header'>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-DARK ">
                        <Container fluid>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                <div href="#home"><img src="images/logo.png" alt="Logo" /></div>
                                <div href="#link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>

                            </div>

                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                                className='text-white'
                            >
                                <Offcanvas.Header closeButton />
                                <Offcanvas.Body  >
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        {
                                            !clickedCollection && (
                                                <>
                                                    <Nav.Link href="#action1">Home</Nav.Link>
                                                </>
                                            )
                                        }
                                        {
                                            (!rubberBracelets || !womenJewellery || !menJewellery) && (
                                                <>
                                                    <NavDropdown
                                                        title="Collections"
                                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                        onClick={handleCollectionClick}
                                                    />
                                                </>
                                            )

                                        }





                                        {
                                            !clickedCollection && (
                                                <>
                                                    <Nav.Link href="#action1">Heritage</Nav.Link>
                                                    <Nav.Link href="#action2">Gallery</Nav.Link>
                                                    <Nav.Link href="#action1">Our Team</Nav.Link>
                                                    <Nav.Link href="#action2">Store locator</Nav.Link>
                                                    <Nav.Link href="#action2">Book an Appointment</Nav.Link>
                                                    <Nav.Link href="#action2">Careers</Nav.Link>
                                                </>
                                            )
                                        }

                                        {
                                            clickedCollection && (
                                                
                                                <>
                                                {
                                                    (!womenJewellery || !menJewellery) && (
                                                        <>
                                                         <NavDropdown title="Rubber Bracelets" onClick={handleRubberBraceletsClick} >
                                                        <Nav.Link href="#action1">Him</Nav.Link>
                                                        <Nav.Link href="#action2">Her</Nav.Link>
                                                    </NavDropdown>
                                                        
                                                        </>
                                                    )
                                                }
                                                   
                                                    {
                                                     (!rubberBracelets ||  !menJewellery) && (
                                                        <>
                                                         <NavDropdown title="Women Jewellery"  onClick={handleWomenJewelleryClick}>
                                                        <Nav.Link href="#action1">Nacklace</Nav.Link>
                                                        <Nav.Link href="#action2">Earrings</Nav.Link>
                                                        <Nav.Link href="#action1">Rings</Nav.Link>
                                                        <Nav.Link href="#action2">Pendants</Nav.Link>
                                                        <Nav.Link href="#action1">Bracelets</Nav.Link>
                                                        <Nav.Link href="#action2">Magal Sutra</Nav.Link>
                                                        <Nav.Link href="#action2">Brooches</Nav.Link>
                                                    </NavDropdown>
                                                    {
                                                                  !womenJewellery && (
                                                                    <>
                                                                     <NavDropdown title="Men Jewellery" onClick={handleMenJewelleryClick}  >
                                                        <Nav.Link href="#action1">Bracelets</Nav.Link>
                                                        <Nav.Link href="#action2">Rings</Nav.Link>
                                                        <Nav.Link href="#action1">Chains</Nav.Link>
                                                        <Nav.Link href="#action2">Cuff Links</Nav.Link>
                                                        <Nav.Link href="#action1">Bracelets</Nav.Link>
                                                        <Nav.Link href="#action2">Brooches</Nav.Link>
                                                    </NavDropdown>
                                                      {
                                                        !menJewellery && (
                                                            <>
                                                             <NavDropdown title="Accessories" >
                                                        <Nav.Link href="#action1">Watch</Nav.Link>
                                                        <Nav.Link href="#action2">Belt</Nav.Link>
                                                        <Nav.Link href="#action1">Phones</Nav.Link>
                                                        <Nav.Link href="#action2">Pens</Nav.Link>
                                                        <Nav.Link href="#action2">Buttons</Nav.Link>
                                                    </NavDropdown>
                                                            
                                                            </>
                                                        )
                                                      }
                                                   
                                                                    </>
                                                                  )
                                                    }
                                                   
                                                        
                                                        </>
                                                     )   
                                                    }
                                                   
                                                </>
                                            )

                                        }
                                        


                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </>
    );
};

export default Header;
