import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Women/Earrings/Earring-1.png',
      name: 'Earring-1',
      content: 'This luxurious necklace features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Women/Earrings/Earring-2.png',
      name: 'Earring-2',
      content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Women/Earrings/Earring-3.png',
      name: 'Earring-3',
      content: 'The necklace is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Women/Earrings/Earring-4.png',
      name: 'Earring-4',
      content: 'The necklace in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Women/Earrings/Earring-5.png',
      name: 'Earring-5',
      content: 'The necklace in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Women/Earrings/Earring-6.png',
      name: 'Earring-6',
      content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];


  


const Earrings = () => {
  
  
  const contain = {
    imagesArray:imagesArray,
    heading:"Earrings",
    duration:5000,
    videoPath:'../videos/Necklace.mp4',
    content: 'At our earrings section, we curate the latest trends and modern styles to complement your contemporary look. Our collection features a diverse range of earrings that are currently in vogue, from sleek geometric designs to minimalist ear cuffs and statement asymmetrical pieces. Explore our selection of modern materials such as resin, acrylic, and mixed metals, reflecting the current fashion landscape. Whether you\'re into bold, abstract shapes or subtle, elegant studs, we have the perfect pair to elevate your style game. Our trending earrings are crafted to resonate with the modern fashionista, offering versatility and chic appeal for any occasion. Discover the fusion of innovation and style in our modern earring collection, and stay ahead of the fashion curve with our carefully curated pieces ',
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite earrings collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
    
  };

  return (
    <>
     <CustomProductsSubSectionSecond data={contain} /> 
    </>
  )
}

export default Earrings