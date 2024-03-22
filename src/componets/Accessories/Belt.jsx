import React from 'react'
import CustomProductsSubSectionSecond from '../../Helpers/CustomProductsSubSectionSecond';

const imagesArray = [
    {
      id: 1,
      url: '../images/Accessories/Belt/belt-1.png',
      name: 'Belt-1',
      content: 'This luxurious Belt features intricate silver metalwork, elegantly framing three prominent red gemstones. The centerpiece is a large teardrop shape, flanked by two smaller oval stones. The meticulous craftsmanship and opulent design make it a striking accessory for special occasions.'
    },
    {
      id: 2,
      url: '../images/Accessories/Belt/belt-2.png',
      name: 'Belt-2',
      content: 'This luxurious Belt features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    },
    {
      id: 3,
      url: '../images/Accessories/Belt/belt-3.png',
      name: 'Belt-3',
      content: 'The Belt is made of white beads and features a pendant. The beads are arranged in a circular pattern, creating a visually appealing design. The pendant adds a touch of elegance to the overall look of the necklace.'
    },
    {
      id: 4,
      url: '../images/Accessories/Belt/belt-4.png',
      name: 'Belt-4',
      content: 'The Belt in the image is a white beaded piece with a circular pattern, featuring a beautiful pendant. The beads are likely made of glass or a similar material, and the pendant adds a touch of elegance to the overall design. The necklace is a simple yet stylish accessory that can be worn with various outfits.'
    },
    {
      id: 5,
      url: '../images/Accessories/Belt/belt-5.png',
      name: 'Belt-5',
      content: 'The Belt in the image is a simple yet elegant piece featuring a circular pattern with white beads. It is adorned with a beautiful pendant, adding a touch of sophistication to the overall design. The necklace is made of high-quality materials, making it a versatile and stylish accessory that can be worn with various outfits.'
    },
    {
      id: 6,
      url: '../images/Accessories/Belt/belt-6.png',
      name: 'Belt-6',
      content: 'This luxurious Belt features intricate silver metalwork, meticulously framing three prominent elements: sparkling diamonds, a large pearl, and sleek sterling silver. Whether worn at a gala or a special celebration, it embodies grace and timeless elegance.'
    }
  ];

const Belt = () => {
   const contain = {
        imagesArray: imagesArray,
        heading: "Belts",
        duration: 5000,
        videoPath: '../videos/Necklace.mp4',
        content: `Welcome to our Belts for men section, where modern sophistication meets the latest trends! Explore a curated collection of bracelets designed to elevate men's style with contemporary flair. From sleek minimalist designs to bold statement pieces, our bracelets showcase the epitome of modern fashion.Discover trending styles including leather cuffs for a rugged yet refined look, and sleek metal bracelets perfect for adding a touch of urban elegance to any outfit. Our bracelets are meticulously crafted using premium materials and expert craftsmanship, ensuring both style and durability.Whether you're accessorizing a casual ensemble or adding a finishing touch to formal attire, our Bracelets for men section offers something for every modern gentleman. Elevate your accessory game with our modern and trending bracelets that seamlessly blend contemporary design with timeless appeal `,
        contentMobile: `Discover the epitome of elegance with Binnys Jewellery's exquisite Belts collection, where timeless craftsmanship meets contemporary allure.Our curated selection features an array of captivating designs,`,
      };
      
      return (
         <CustomProductsSubSectionSecond data={contain} />
      )
}

export default Belt