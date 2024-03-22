import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive";

const AboutPara = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 764 });
    const [showFullContent, setShowFullContent] = useState(false);

    const handleReadMoreClick = () => {
        setShowFullContent(!showFullContent); // Toggle the value of showFullContent
    };
    return (
        <>
            {
                !isSmallScreen ? (<>
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

                </>) : (
                    showFullContent ? (
                        <>
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
                                legacy meets luxury in a celebration of timeless beauty
                                <span onClick={handleReadMoreClick} style={{ padding: '0px', margin: '0px', cursor: 'pointer', color: 'pink' ,fontWeight:500}}>  Read Less...</span>
                            </p>

                        </>

                    ) : (<>
                        <p>
                            Welcome to Binny's, a legacy of elegance that has adorned
                            generations since 1962. With a rich heritage spanning 60
                            years, we take pride in crafting exquisite diamond and gold
                            jewellery that transcends time. Our unique designs seamlessly
                            blend tradition with modern trends, creating timeless pieces
                            that resonate with the essence of luxury
                            <span onClick={handleReadMoreClick} style={{ padding: '0px', margin: '0px', cursor: 'pointer', color: 'pink',fontWeight:500 }}> Read More...</span>

                        </p>

                    </>)
                )


            }

        </>
    )
}

export default AboutPara