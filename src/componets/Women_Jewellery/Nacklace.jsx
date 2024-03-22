import React, { useState } from "react";
import CustomProductsSubSectionSecond from "../../Helpers/CustomProductsSubSectionSecond";


const imagesArray = [
  {
    id: 1,
    url: '../images/Women/Nacklace/Image-1.png',
    name: 'Ruby Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
  },
  {
    id: 2,
    url: '../images/Women/Nacklace/Image-2.png',
    name: 'Princess Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
  },
  {
    id: 3,
    url: '../images/Women/Nacklace/Image-3.png',
    name: 'Tear Drop Necklace',
    content: 'The necklace is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
  },
  {
    id: 4,
    url: '../images/Women/Nacklace/Image-4.png',
    name: 'Sapphire Necklace',
    content: 'The necklace in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
  },
  {
    id: 5,
    url: '../images/Women/Nacklace/Image-5.png',
    name: 'Choker Necklace',
    content: 'The necklace in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
  },
  {
    id: 6,
    url: '../images/Women/Nacklace/Image-6.png',
    name: 'Opera Necklace',
    content: 'This luxurious necklace features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
  }
];



const Nacklace = () => {

  

  const contain = {
    imagesArray:imagesArray,
    heading:"Necklace",
    duration:5000,
    videoPath:'../videos/Necklace.mp4',
    content: `Discover the epitome of elegance with Binnys Jewellery's exquisite necklace collection, where timeless craftsmanship meets contemporary allure. Our curated selection features an array of captivating designs, each meticulously crafted to exude sophistication and style. Embrace modernity with our trend-setting necklaces, meticulously designed to complement the dynamic spirit of today's fashion-forward individual. From sleek and minimalist pieces to bold statement necklaces, our collection offers a diverse range of options to suit every occasion and personal style. At Binnys Jewellery, we pride ourselves on blending traditional artistry with avant-garde designs, ensuring each piece tells a unique story of elegance and innovation. Explore our collection and indulge in the luxurious allure of Binnys Jewellery's modern necklace designs `,
    contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite necklace collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
    

  };
  return (
    <>
     <CustomProductsSubSectionSecond data={contain} /> 
    </>
  );
};

export default Nacklace;
