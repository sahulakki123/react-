// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import im from  './assets/img.jpg'

const  App= () => {
  return (
    <Swiper
  spaceBetween={50}
  slidesPerView={3}
  className="mySwiper"
>
  <SwiperSlide><img src={im} alt="" /></SwiperSlide>
  <SwiperSlide><img src={im} alt="" /></SwiperSlide>
  <SwiperSlide><img src={im} alt="" /></SwiperSlide>
  <SwiperSlide><img src={im} alt="" /></SwiperSlide>
</Swiper>

  )
}
export default App