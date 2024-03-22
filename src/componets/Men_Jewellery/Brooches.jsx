import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Man/Brooches/Brooche-1.png',
      name: 'Brooches-1',
      content: 'This luxurious Brooches features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Man/Brooches/Brooche-2.png',
      name: 'Brooches-2',
      content: 'This luxurious Brooches features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Man/Brooches/Brooche-3.png',
      name: 'Brooches-3',
      content: 'The Brooches is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Man/Brooches/Brooche-4.png',
      name: 'Brooches-4',
      content: 'The Brooches in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Man/Brooches/Brooche-5.png',
      name: 'Brooches-5',
      content: 'The Brooches in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Man/Brooches/Brooche-6.png',
      name: 'Brooches-6',
      content: 'This luxurious Brooches features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];


  


const Brooches = () => {
  

  const contain = {
    imagesArray: imagesArray,
    heading: "Brooches",
    duration: 3500,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our Brooches for men section, where modern sophistication meets the latest trends! Dive into a curated collection of brooches designed to elevate men's style with contemporary flair. From sleek minimalist designs to bold statement pieces, our brooches showcase the epitome of modern fashion. Discover trending styles including geometric shapes for a touch of avant-garde elegance and intricate enamel designs that add a pop of color to any ensemble. Our brooches are meticulously crafted using premium materials and expert craftsmanship, ensuring both style and durability. Whether you're dressing up for a formal occasion or adding a unique touch to your everyday look, our Brooches for men section offers something for every modern gentleman. Elevate your accessory game with our modern and trending brooches that seamlessly blend contemporary design with timeless appeal `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite Brooches collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
   
  };

  return (
    <CustomProductsSubSectionSecond data={contain} />
  )
}

export default Brooches