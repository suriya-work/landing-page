import React from 'react'
import DataSvg from '../../data/DataSvg'
const Toolbars = () => {
  return (
    <div className='container mx-auto grid grid-rows-5 gap-4'>
        {/* <div className=''> */}
            {
                DataSvg.map((toolbar) => {
                    <div key={toolbar.id}>
                        <img src={toolbar.image} alt="img" />
                    </div>
                })
            }

        {/* </div> */}
      <h1>Hoo;;;oo</h1>
    </div>
  )
}

export default Toolbars
