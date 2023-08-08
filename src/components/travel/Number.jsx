import React from 'react'
const number = [
    { id: 1, num: '500k+', title: 'Holiday Package' },
    { id: 2, num: '100k+', title: 'Luxury Hotel' },
    { id: 3, num: '7k+', title: 'Premium Airlines' },
    { id: 4, num: '2k+', title: 'Happy Customer' },
]
const Number = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg-grid-cols-2 gap-7 pt-[2rem]'>

            {
                number.map((numbers) => {
                    return (
                        <div key={numbers.id} className='text-num'>
                            <span className='text-orange font-bold '>{numbers.num}</span>
                            <h3 className='text-black'>{numbers.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Number
