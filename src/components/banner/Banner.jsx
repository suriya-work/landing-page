import React from 'react'
import group from '../../../src/images/Group 1.png';
const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1'>
            {/* sm:gride-cols-12 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-5 */}
                <h1>Heellloo</h1>
                <p>kdhhvjvbv</p>
            </div>
            <div>
                <img src={group} alt="banner" className='grid grid-cols-11'/>
                {/* sm:gride-cols-12 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-7 */}
            </div>

        </div>
    )
}

export default Banner
