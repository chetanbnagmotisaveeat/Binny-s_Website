import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const ExpertiesPara = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 764 });
    const [showFullContent, setShowFullContent] = useState(false);

    const handleReadMoreClick = () => {
        setShowFullContent(!showFullContent); // Toggle the value of showFullContent
    };
    return (
        <>
            {
                !isSmallScreen ? (

                    <>
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
                    </>

                ) : (
                    showFullContent ? (<>
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
                            individuality and taste
                            <span onClick={handleReadMoreClick} style={{ padding: '0px', margin: '0px', cursor: 'pointer',color: 'pink',fontWeight:500 }}>  Read Less...</span>
                        </p>
                    </>) : (<>
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
                            showcase the finest materials and exquisite detailing
                            <span onClick={handleReadMoreClick} style={{ padding: '0px', margin: '0px', cursor: 'pointer', color: 'pink',fontWeight:500 }}> Read More...</span>
                        </p>

                    </>)

                )
            }


        </>
    )
}

export default ExpertiesPara