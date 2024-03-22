import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Women/Rings/Ring-1.png',
      name: 'Rings-1',
      content: 'This luxurious Rings features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Women/Rings/Ring-2.png',
      name: 'Rings-2',
      content: 'This luxurious Rings features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Women/Rings/Ring-3.png',
      name: 'Rings-3',
      content: 'The Rings is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Women/Rings/Ring-4.png',
      name: 'Rings-4',
      content: 'The Rings in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Women/Rings/Ring-5.png',
      name: 'Rings-5',
      content: 'The Rings in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Women/Rings/Ring-6.png',
      name: 'Rings-6',
      content: 'This luxurious Rings features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];

const Rings = () => {
 
  
  const contain = {
    imagesArray: imagesArray,
    heading: "Rings",
    duration: 5000,
    videoPath: '../videos/Necklace.mp4',
    content: 'Welcome to our rings section, where modern and trending styles take center stage. Our collection boasts a captivating array of contemporary designs that are currently in vogue. From sleek minimalist bands to eye-catching statement rings, we showcase the latest trends in the world of finger adornments. Embracing modern materials such as lustrous metals, dazzling gemstones, and unconventional mixed-media, our rings epitomize the current fashion landscape. Whether you\'re drawn to bold, architectural shapes or delicate, nature-inspired motifs, our selection caters to diverse tastes, ensuring the perfect ring to complement your style. Crafted with innovation and flair, our trending rings capture the essence of modern elegance, offering versatility and allure for any occasion. Explore our carefully curated collection to stay ahead of the fashion curve and infuse your look with the perfect blend of contemporary charm and timeless sophistication ',
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite rings collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
  
  };
  
  return (
    <CustomProductsSubSectionSecond data={contain} /> 
  )
}

export default Rings