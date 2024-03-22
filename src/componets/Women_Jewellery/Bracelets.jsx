import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Women/Bracelets/Bracelet-1.png',
      name: 'Bracelet-1',
      content: 'This luxurious Bracelet features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Women/Bracelets/Bracelet-2.png',
      name: 'Bracelet-2',
      content: 'This luxurious Bracelet features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Women/Bracelets/Bracelet-3.png',
      name: 'Bracelet-3',
      content: 'The Bracelet is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Women/Bracelets/Bracelet-4.png',
      name: 'Bracelet-4',
      content: 'The Bracelet in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Women/Bracelets/Bracelet-5.png',
      name: 'Bracelet-5',
      content: 'The Bracelet in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Women/Bracelets/Bracelet-6.png',
      name: 'Bracelet-6',
      content: 'This luxurious Bracelet features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];


  
  


const Bracelets = () => {
   
  const contain = {
    imagesArray: imagesArray,
    heading: "Bracelets",
    duration: 5000,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our bracelets section, where modern sophistication meets the latest trends! Explore a handpicked collection of bracelets crafted to add contemporary elegance to your style. From sleek minimalist designs to eye-catching statement pieces, our bracelets showcase the epitome of modern fashion. Discover trending styles including sleek bangles for effortless layering and delicate chains adorned with unique charms that exude charm and personality. Our bracelets are meticulously crafted using premium materials and expert craftsmanship, ensuring both style and durability. Whether you're searching for a versatile bracelet to complement your everyday look or a bold accessory to make a statement, our Bracelets section offers something for every occasion. Elevate your jewelry collection with our modern and trending bracelets that seamlessly blend contemporary `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite bracelets collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
   
  };

  return (
    <CustomProductsSubSectionSecond data={contain} />
  )
}

export default Bracelets