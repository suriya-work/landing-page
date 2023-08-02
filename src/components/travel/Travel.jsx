import React from 'react'
import myproject from '../../../public/images/Group 9238.png'
const Travel = () => {
    return (
        <div className='container mx-auto px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='pt-[6rem]'>
                <img className='my-img' src={myproject} alt="my" />
            </div>
            <div className='pt-[6rem] px-[6rem]'>
                <h3 className='text-travel'>Travel Point</h3>
                <h3 className='text-black font-bold text-[30px]'>We helping you find your dream location</h3>
                <p className='text-gray text-sm pt-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <p className='text-gray text-sm pt-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            </div>

        </div>
    )
}

export default Travel
