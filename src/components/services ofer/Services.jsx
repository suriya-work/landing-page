import React from 'react'
import group from '../../../public/images/Rectangle 9.png';
import Location from '../../icons/Location';
import Celender from '../../icons/Celender';
import Ticket from '../../icons/Ticket';
const Services = () => {
    return (
        <div className='container mx-auto pb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-36'>
            <div className='pt-20'>
                <h3 className='text-travel pb-3'>Key features</h3>
                <h3 className='text-black font-bold text-[30px] '>We offer best services</h3>
                <p className='text-gray text-sm '>Contrary to popular belief, Lorem Ipsum is not simply random<br /> text. It has roots in a piece of classical Latin literature<br />
                    from 45 BC.</p>
                <div>
                    <div className='loction pt-10'>
                        <div>
                            <Location />
                        </div>
                        <span className='text-black font-bold'>We offer best services
                            <p className='text-gray text-sm'>Lorem Ipsum is not simply random text</p>
                        </span>

                    </div>
                    <div className='celender'>
                        <div>
                            <Celender />
                        </div>
                        <span className='text-black font-bold '>Schedule your trip
                            <p className='text-gray text-sm'>It has roots in a piece of classical</p>
                        </span>
                    </div>
                    <div className='loction'>
                        <div>
                            <Ticket />
                        </div>
                        <span className='text-black font-bold '>Get discounted coupons
                            <p className='text-gray text-sm'>Lorem Ipsum is not simply random text</p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img src={group} alt="group" className='w-96 pt-20' />
               
            </div>
        </div>
    )
}

export default Services
