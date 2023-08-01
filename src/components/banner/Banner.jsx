import React from 'react'
// image / icons
import group from '../../../src/images/Group 1.png';
import Gift from '../../icons/Gift';
import Watch from '../../icons/Watch';
const Banner = () => {
    return (
        <div className='container mx-auto grid grid-rows-1 sm:gride-cols-12 md:grid-cols-2 containerBanner'>

            <div className='px-10 pt-28'>
                <div className='pb-20'>
                    <a href="#" className=' w-48 text-bubble-gum font-bold text-sm  bg-white rounded-3xl world'>
                        Explore the world!
                        <span className='ps-3'>
                            <Gift />
                        </span>
                    </a>
                </div>
                <h2 className='text-5xl font-bold text-black' >Travel <span className='text-bubble-gum text-5xl font-bold'>top <br /> destination <br /></span>of the world</h2>
                <p className='text-gray text-sm pt-12'>We always make our customer happy by providing <br />
                    as many choices as possible </p>
                <div className='flex pt-10'>
                    <a href="#" className='singup me-2 text-center font-bold text-sm pt-3 w-32 linkA'>Get Started</a>
                    <a href="#" className='text-black font-bold text-sm  pt-3 w-44  bg-white rounded-3xl world'>
                        <span className='pe-3 '>
                            <Watch />
                        </span>
                        Watch Demo
                    </a>

                </div>
            </div>
            <div>
                <img src={group} alt="banner" className='pt-10' />
            </div>

        </div>
    )
}

export default Banner
