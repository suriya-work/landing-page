import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardData from '../../data/CardData';
const Card = () => {
  return (
    <div className='container mx-auto pb-96 '>
      {/* grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3 */}
      <div className='pt-[25px] px-12'>
        <h3 className='text-bubble-gum  text-lg'>Top Destination</h3>
        <h3 className='font-bold text-2xl'>Explore top destination</h3>
      </div>
      <div className='px-10 pt-10'>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            CardData.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <img src={slide.image} alt="img" />
                  <p>{slide.title}</p>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

    </div>
  )
}

export default Card
