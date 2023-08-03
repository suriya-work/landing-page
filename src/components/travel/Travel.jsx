import React from 'react'
import myproject from '../../../public/images/Group 9238.png';
// number
import Number from './Number';
const Travel = () => {
    return (
        <div className='container  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
            <div className='pt-[6rem] '>
                <img src={myproject} alt="my" />
            </div>
            <div className='pt-[3rem] px-[7rem]  travel-pon'>
                <div className='pt-[2rem]'>

                    <h3 className='text-travel pb-3'>Travel Point</h3>
                    <h3 className='text-black font-bold text-[30px] '>We helping you find your dream location</h3>
                </div>
                <p className='text-gray text-sm pb-7'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <Number />
            </div>
            {/* <div> */}
            {/* </div> */}

        </div>
    )
}

export default Travel
