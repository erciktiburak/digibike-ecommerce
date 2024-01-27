'use client';
import Bike from './Bike';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const PopularBikeCarousel = ({bikes}) => {
  return (
    <Swiper>
    {bikes.map((bike) => {
      return <SwiperSlide key={bike._id}>
        <Bike bike={bike}/>
      </SwiperSlide>
    })}
    </Swiper>
    )
}

export default PopularBikeCarousel;