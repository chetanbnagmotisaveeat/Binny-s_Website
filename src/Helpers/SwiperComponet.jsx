import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/swiperStyle.css';

const imagesArrya = [
  { id: 1, url: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { id: 2, url: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { id: 3, url: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { id: 4, url: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  { id: 5, url: 'https://swiperjs.com/demos/images/nature-5.jpg' },
  { id: 6, url: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  { id: 7, url: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  { id: 8, url: 'https://swiperjs.com/demos/images/nature-5.jpg' },
]

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SwiperComponet = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      className="mySwiper "
    >
      <div style={{ margin: "50px" }}>
        {
          imagesArrya.map((image, index) => {
            return (
              <>
                <SwiperSlide key={image.id+index} style={{ margin: "50px" }}>
                  <img src={image.url} />
                </SwiperSlide>
              </>
            )
          })
        }

      </div>

    </Swiper>
  )
}

export default SwiperComponet