import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Man/Rings/Ring-1.png',
      name: 'Ring-1',
      content: 'This luxurious Ring features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Man/Rings/Ring-2.png',
      name: 'Ring-2',
      content: 'The Ring in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'

    },
    {
      id: 3,
      url: '../images/Man/Rings/Ring-3.png',
      name: 'Ring-3',
      content: 'The Ring in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 4,
      url: '../images/Man/Rings/Ring-4.png',
      name: 'Ring-4',
      content: 'The Ring in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Man/Rings/Ring-5.png',
      name: 'Ring-5',
      content: 'The Ring in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Man/Rings/Ring-6.png',
      name: 'Ring-6',
      content: 'This luxurious Ring features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];

const Rings = () => {
 
  const contain = {
    imagesArray: imagesArray,
    heading: "Rings",
    duration: 3500,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our Rings for men section, where modern sophistication meets the latest trends! Dive into a curated collection of rings designed to elevate men's style with contemporary flair. From sleek minimalist bands to bold statement pieces, our rings showcase the epitome of modern fashion.Discover trending styles including signet rings for a classic yet updated look, and textured bands that add a touch of rugged elegance to any outfit. Our rings are meticulously crafted using premium materials and expert craftsmanship, ensuring both style and durability.Whether you're searching for a versatile ring to complement your everyday attire or a bold accessory to make a statement, our Rings for men section offers something for every modern gentleman. Elevate your accessory game with our modern and trending rings that seamlessly blend contemporary design with timeless appeal `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite Bracelets collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
   
    
  };
  
  return (
    <CustomProductsSubSectionSecond data={contain} />
  )
}

export default Rings