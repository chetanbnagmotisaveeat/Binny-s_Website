import React, { useState } from 'react'
import CustomProductsSubSection from '../../Helpers/CustomProductsSubSection';
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Man/CuffLinks/cufflink-1.png',
      name: 'Cuff Links-1',
      content: 'This luxurious Cuff Links features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Man/CuffLinks/cufflink-2.png',
      name: 'Cuff Links-2',
      content: 'This luxurious Cuff Links features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Man/CuffLinks/cufflink-3.png',
      name: 'Cuff Links-3',
      content: 'The Cuff Links in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 4,
      url: '../images/Man/CuffLinks/cufflink-4.png',
      name: 'Cuff Links-4',
      content: 'The Cuff Links in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Man/CuffLinks/cufflink-5.png',
      name: 'Cuff Links-5',
      content: 'The Cuff Links in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Man/CuffLinks/cufflink-6.png',
      name: 'Cuff Links-6',
      content: 'This luxurious Cuff Links features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];


 



const Cuff_Links = () => {
  
  
  const contain = {
    imagesArray: imagesArray,
    heading: "Cuff Links",
    duration: 3500,
    videoPath: '../videos/Necklace.mp4',
    content: `Welcome to our Cufflinks for men section, where modern sophistication meets the latest trends! Explore a curated collection of cufflinks designed to elevate men's style with contemporary flair. From sleek minimalist designs to bold statement pieces, our cufflinks showcase the epitome of modern fashion.Discover trending styles including geometric shapes for a touch of avant-garde elegance and intricate enamel designs that add a pop of color to any ensemble. Our cufflinks are meticulously crafted using premium materials and expert craftsmanship, ensuring both style and durability.Whether you're dressing up for a formal occasion or adding a polished touch to your everyday look, our Cufflinks for men section offers something for every modern gentleman. Elevate your accessory game with our modern and trending cufflinks that seamlessly blend contemporary design with timeless appeal `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite Cufflinks collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
   
  };

  return (
    <CustomProductsSubSectionSecond data={contain} />
  )
}

export default Cuff_Links