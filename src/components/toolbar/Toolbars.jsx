import React from 'react'
import DataSvg from '../../data/DataSvg'
const Toolbars = () => {
    return (
        <div className='container mx-auto  ps-10 pt-10  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg-grid-cols-5  gap-12'>
            {
                DataSvg.map((toolbar) => {
                    return (
                        <div className='flex justify-center text-center' key={toolbar.id}>
                            <img  src={toolbar.image} alt="img" />
                        </div>
                    )
                })
            }

        </div>

    )
}

export default Toolbars
