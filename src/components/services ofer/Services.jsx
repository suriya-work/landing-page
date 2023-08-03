import React from 'react'
import group from '../../../public/images/Rectangle 9.png'
const Services = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-36'>
            <div className='pt-20'>
                <h3 className='text-travel pb-3'>Key features</h3>
                <h3 className='text-black font-bold text-[30px] '>We offer best services</h3>
                <p className='text-gray text-sm pb-7'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    from 45 BC.</p>


            </div>
            <img src={group} alt="" />
            <div className='text-center'>
                <h3 className='text-travel pb-3'>Testimonials</h3>
                <h3 className='text-black font-bold text-[30px] '>Trust our clients</h3>
            </div>
        </div>
    )
}

export default Services
