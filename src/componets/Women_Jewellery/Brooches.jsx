import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Women/Brooches/Brooches-1.png',
      name: 'Brooches-1',
      content: 'This luxurious Brooches features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Women/Brooches/Brooches-2.png',
      name: 'Brooches-2',
      content: 'This luxurious Brooches features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Women/Brooches/Brooches-3.png',
      name: 'Brooches-3',
      content: 'The Brooches is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Women/Brooches/Brooches-4.png',
      name: 'Brooches-4',
      content: 'The Brooches in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Women/Brooches/Brooches-5.png',
      name: 'Brooches-5',
      content: 'The Brooches in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Women/Brooches/Brooches-6.png',
      name: 'Brooches-6',
      content: 'The Bracelet in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    }
  ];


 


const Brooches = () => {
 

  const contain = {
    imagesArray: imagesArray,
    heading: "Brooches",
    duration: 5000,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our brooches section, where tradition meets modern elegance in timeless fashion! Explore a curated collection of Mangal Sutras designed to blend cultural significance with contemporary trends. From classic designs with a modern twist to innovative interpretations of this cherished symbol, our Mangal Sutras embody the essence of modern sophistication. Discover trending styles including sleek chains adorned with minimalist pendants and intricately designed Mangal Sutras featuring symbolic motifs reimagined for today's fashion-forward individuals. Our Mangal Sutras are crafted with precision and attention to detail using high-quality materials, ensuring both style and longevity. Whether you're celebrating a special occasion or seeking a meaningful accessory to express your cultural heritage, our Mangal Sutra section offers something for every modern bride or jewelry enthusiast. Elevate your look with our modern and trending Mangal Sutras that honor tradition while embracing contemporary elegance `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite brooches collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
    
  };

  return (
    <>
      <CustomProductsSubSectionSecond data={contain} />
    </>
  )
}

export default Brooches