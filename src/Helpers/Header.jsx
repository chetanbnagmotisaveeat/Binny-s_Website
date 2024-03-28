import React, { useEffect, useRef, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { CustomNavLink } from './CustomNavLink';

const womenSection=[
    {to:"/women/nacklace",name:'Nacklace'},
    {to:"/women/earrings",name:'Earrings'},
    {to:"/women/rings",name:'Rings'},
    {to:"/women/pendants",name:'Pendants'},
    {to:"/women/bracelets",name:'Bracelets'},
    {to:"/women/magal-sutra",name:'Magal Sutra'},
    {to:"/women/brooches",name:'Brooches'},
]

const manSection=[
    {to:"/man/bracelets",name:'Bracelets'},
    {to:"/man/rings",name:'Rings'},
    {to:"/man/chains",name:'Chains'},
    {to:"/man/cuff-links",name:'Cuff Links'},
    {to:"/man/brooches",name:'Brooches'},
  
]

const accessoriesSection=[
    {to:"/accessories/belt",name:'Belt'},
    {to:"/accessories/buttons",name:'Buttons'},
    {to:"/accessories/Pens",name:'Pens'},
    {to:"/accessories/watch",name:'Watch'}  
]

const rubberSection=[
    {to:"/rubbers/him",name:'Him'},
    {to:"/rubbers/her",name:'Her'},
   
]

const Header = () => {
    const [clickedCollection, setClickedCollection] = useState(false);
    const [rubberBracelets, setRubberBracelets] = useState(false);
    const [womenJewellery, SetwomenJewellery] = useState(false);
    const [menJewellery, setMenJewellery] = useState(false);
    const [accessories, setAccessories] = useState(false);
    const [show, setShow] = useState(false);
    
    const offcanvasRef = useRef(null);
    const handleClose = () => setShow(false);


    const handleCollectionClick = () => {
        setClickedCollection(!clickedCollection);
        if (clickedCollection === false) {
            SetwomenJewellery(false);
            setMenJewellery(false);
            setAccessories(false);
            setRubberBracelets(false);
        }

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

    const handleAccessoriesClick = () => {
        setAccessories(!accessories);
    };

    const handleToggleClick = () => {
        setClickedCollection(false);
        SetwomenJewellery(false);
        setMenJewellery(false);
        setAccessories(false);
        setRubberBracelets(false);
        setShow(!show)

    };
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                setShow(!show);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [offcanvasRef]);


    return (
        <>
            <div className='header'>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-DARK">
                        <Container fluid>
                            <div className='d-flex justify-content-between align-items-center' style={{height:'40px'}}>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
                                <div href="#home" className="logo-container" ><img className='img-fluid' src="/images/logo.png" alt="Logo"/></div>
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
                                show={show}


                            >
                                <Offcanvas.Header closeButton  onClick={handleToggleClick}/>
                                <Offcanvas.Body  >
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        {!clickedCollection && (
                                            <>
                                                <CustomNavLink to="/" onClick={handleClose}>Home</CustomNavLink>
                                            </>
                                        )}
                                        {!rubberBracelets && !womenJewellery && !menJewellery && !accessories && (
                                            <>
                                                <NavDropdown
                                                    title="Collections"
                                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                    className={clickedCollection ? 'open' : ''}
                                                    onClick={handleCollectionClick}
                                                />
                                            </>
                                        )}
                                        {!clickedCollection && (
                                            <>
                                                <CustomNavLink to="/heritage" onClick={handleClose}>Heritage</CustomNavLink>
                                                <CustomNavLink to="/gallery" onClick={handleClose}>Gallery</CustomNavLink>
                                                <CustomNavLink to="/our-Team" onClick={handleClose}>Our Team</CustomNavLink>
                                                <CustomNavLink to="/store" onClick={handleClose}>Store locator</CustomNavLink>
                                                <CustomNavLink to="/book-an-appointment" onClick={handleClose}>Book an Appointment</CustomNavLink>
                                                <CustomNavLink to="/careers" onClick={handleClose}>Careers</CustomNavLink>

                                            </>
                                        )}
                                        {clickedCollection && (
                                            <> {
                                                (!womenJewellery && !menJewellery && !accessories) && (
                                                    <NavDropdown
                                                        title="Rubber Bracelets"
                                                        className={rubberBracelets ? 'open' : ''}
                                                        onClick={handleRubberBraceletsClick}
                                                        show={rubberBracelets} />


                                                )
                                            }

                                                {

                                                    !rubberBracelets && (
                                                        <>
                                                            {
                                                                !menJewellery && !accessories && (
                                                                    <NavDropdown
                                                                        title="Women Jewellery"
                                                                        onClick={handleWomenJewelleryClick}
                                                                        className={womenJewellery ? 'open' : ''}
                                                                        show={womenJewellery} />


                                                                )
                                                            }

                                                            {
                                                                !womenJewellery && (
                                                                    <>
                                                                        {
                                                                            !accessories && (
                                                                                <NavDropdown
                                                                                    title="Men Jewellery"
                                                                                    onClick={handleMenJewelleryClick}
                                                                                    className={menJewellery ? 'open' : ''}
                                                                                    show={menJewellery}
                                                                                />
                                                                            )
                                                                        }

                                                                        {
                                                                            !menJewellery && (

                                                                                <NavDropdown
                                                                                    title="Accessories"
                                                                                    onClick={handleAccessoriesClick}
                                                                                    className={accessories ? 'open' : ''}
                                                                                    show={accessories}
                                                                                />


                                                                            )
                                                                        }

                                                                    </>


                                                                )
                                                            }

                                                        </>
                                                    )
                                                }
                                            </>
                                        )}

                                        {
                                            rubberBracelets && (
                                                <>
                                                {
                                                    rubberSection && rubberSection.map((rubber,index)=>{
                                                        return (
                                                      <CustomNavLink key={`${rubber.name}+${index}`} to={rubber.to} onClick={handleClose}>{rubber.name}</CustomNavLink>
                                                        )
                                                    })
                                                }
                                                </>
                                            )
                                        }
                                        {
                                            womenJewellery && (
                                                <>
                                                {
                                                    womenSection && womenSection.map((women,index)=>{
                                                        return (
                                                      <CustomNavLink key={`${women.name}+${index}`} to={women.to} onClick={handleClose}>{women.name}</CustomNavLink>

                                                 )
                                                    })
                                                }
                                                </>
                                            )
                                        }
                                        {
                                            menJewellery && (
                                                <>
                                                {
                                                    manSection && manSection.map((man,index)=>{
                                                        return (
                                                      <CustomNavLink key={`${man.name}+${index}`} to={man.to} onClick={handleClose}>{man.name}</CustomNavLink>
                                                       )
                                                    })
                                                }
                                
                                                </>
                                            )
                                        }
                                        {
                                            accessories && (
                                                <>
                                                {
                                                    accessoriesSection && accessoriesSection.map((assc,index)=>{
                                                        return (
                                                      <CustomNavLink key={`${assc.name}+${index}`} to={assc.to} onClick={handleClose}>{assc.name}</CustomNavLink>

                                                        )
                                                    })
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
