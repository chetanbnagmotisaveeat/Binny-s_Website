import React from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import { useState } from 'react';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Women/Pendants/Pendant-1.png',
      name: 'Rings-1',
      content: 'This luxurious Pendant features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Women/Pendants/Pendant-2.png',
      name: 'Pendant-2',
      content: 'This luxurious Pendant features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Women/Pendants/Pendant-3.png',
      name: 'Pendant-3',
      content: 'The Pendant is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Women/Pendants/Pendant-4.png',
      name: 'Pendant-4',
      content: 'The Pendant in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Women/Pendants/Pendant-5.png',
      name: 'Pendant-5',
      content: 'The Pendant in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Women/Pendants/Pendant-6.png',
      name: 'Pendant-6',
      content: 'This luxurious Pendant features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];


  


const Pendants = () => {
  

  const contain = {
    imagesArray: imagesArray,
    heading: "Pendants",
    duration: 5000,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our Pendants section, where contemporary chic meets the latest trends! Dive into a carefully curated collection of pendants designed to infuse your style with modern sophistication. From sleek geometric shapes to intricately detailed designs, our pendants offer a diverse array of options that epitomize the essence of modern fashion. Explore our selection of trending styles, including minimalist pendants perfect for everyday wear and statement pieces that command attention with their bold elegance. Our pendants feature high-quality materials and exquisite craftsmanship, ensuring both style and longevity. Whether you're searching for a versatile pendant to complement any outfit or a standout piece to elevate your look, our Pendants section has something for every discerning taste. Elevate your jewelry collection with our modern and trending pendants that effortlessly blend contemporary flair with timeless elegance `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite Pendants collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
   
  };
  
  return (
    <>
     <CustomProductsSubSectionSecond data={contain} /> 
    </>
  )
}

export default Pendants