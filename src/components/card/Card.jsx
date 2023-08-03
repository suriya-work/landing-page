import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Pagination } from 'swiper';
import CardData from '../../data/CardData';
const Card = () => {


  return (
    <div className='container mx-auto'>
      <div className='px-11 travel-font'>
        <h3 className='text-travel'>Top Destination</h3>
        <h3 className='font-bold text-3xl'>Explore top destination</h3>
      </div>
      <div>
      </div>
      <div className='px-10 pt-10'>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,

          }}

          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,

            },
            360: {
              slidesPerView: 1,

            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              // spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"

        >
          {
            CardData.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <img src={slide.image} alt="img" />
                  <div className=' shadow-md rounded-b-[25px] bg-white overflow-hidden p-3 max-w-[350px]'>
                    <p className='text-black font-bold '>{slide.title1}
                      <span className='text-bubble-gum ps-10'>{slide.price}</span>
                    </p>
                    <p className='text-black font-bold pb-5'>{slide.title2}</p>
                    <span className='text-sm'>{slide.city}</span>
                    <img src={slide.svg} alt="svg" />
                  </div>
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
