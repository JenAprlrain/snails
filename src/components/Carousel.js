import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";



import {Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/1.png';
import img2 from '../assets/66.png';
import img3 from '../assets/230.png';
import img4 from '../assets/244.png';


const Container = styled.div`
width: 25vw;
height: 65vh;

@media (max-width: 70em) {
  height: 60vh;
}

@media (max-width: 64em) {
  height: 45vh;
  width: 60vw;
}
@media (max-width: 48em) {
  height: 35vh;
  width: 50vw;
}
@media (max-width: 30em) {
  height: 45vh;
  width: 40vw;
}
.swiper {
    width: 100%;
    height: 100%;
}


.swiper-slide{
    background-color: ${props=> props.theme.dark};
    border-radius: 20px;

    display: flex;
    jstify-content: center;
    align-items: center;

    img{
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
}

`

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      pagination={{
        type:'fraction',
      }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Snails Squad"/> </SwiperSlide>
        <SwiperSlide><img src={img2} alt="Snails Squad"/> </SwiperSlide>
        <SwiperSlide><img src={img3} alt="Snails Squad"/> </SwiperSlide>
        <SwiperSlide><img src={img4} alt="Snails Squad"/> </SwiperSlide>
  
  
  
      </Swiper>
    </Container>
  )
}

export default Carousel