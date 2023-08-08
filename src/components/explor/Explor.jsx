import React from 'react'
import Message from '../../icons/Message'
const Explor = () => {
    return (
        <div className='md:container md:mx-auto rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  bg-pink'>
            <div className=''>
                <h3 className='text-travel text-center pt-20'>subscribe to our newsletter</h3>
                <h3 className='text-black font-bold text-center text-[30px] leading-10 pt-10' >Prepare yourself & let’s explore the<br /> beauty of the world</h3>
            </div>
            <div className='relative container-input ps-20 text-center pt-9'>
                <input type="email" placeholder='Your Email' />
                <div className='message'>
                    <Message />
                </div>
                <button className='ms-10'>Subscribe</button>
            </div>

        </div>
    )
}

export default Explor
