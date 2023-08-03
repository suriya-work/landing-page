import React from 'react'
import destination from '../../../public/images/des1.png'
import booking from '../../../public/images/booking 1.png'

const HeroSection = () => {
    return (
        <div className='container mx-auto px-10 gap-24  pb-[8rem] pt-[5rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            <div className='pt-[9rem] text-services'>
                <h3 className='text-travel pb-3'>Services</h3>
                <h3 className='text-black font-bold text-[30px]'>Our top value categories for you</h3>
            </div>

            <div className='section-des'>
                <img src={destination} alt="des" />
                <div>
                    <h3 className='text-black font-bold text-xl text-center'>Best Tour Guide</h3>
                    <p className='text-center font-normal text-sm text-gray pt-8'>What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
            <div className='section-book'>
                <img src={booking} alt="" />
                <div>
                    <h3 className='text-black font-bold text-xl text-center'>Easy Booking</h3>
                    <p className='text-center font-normal text-sm text-gray pt-8'>Square, was moving across the sand in their direction.</p>
                </div>
            </div>
            {/*  */}
        </div>
    )
}

export default HeroSection
