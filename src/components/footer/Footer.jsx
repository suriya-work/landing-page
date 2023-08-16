import React from 'react'
import logo from "../../../public/images/logo.png"
import FaceBook from '../../icons/FaceBook'
import Twitter from '../../icons/Twitter'
import Instagram from '../../icons/Instagram'

const Footer = () => {
    return (
        <div className='container mx-auto ps-10 pt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-32'>
            <div>
                <img src={logo} alt="logo" />
                <p className='pt-5 text-gray text-sm'>Contrary to popular belief,<br /> Lorem Ipsum is not simply<br /> random text. It has roots<br />
                    in a piece of classical Latin<br /> literature from 45 BC.</p>
                <div className='flex gap-5 pt-10'>
                    <FaceBook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>
            <div className=''>
                <h2 className='font-bold text-black text-[18px] pb-7'>Company</h2>
                <a className='flex gap-4 text-gray' href="#">About</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">Career</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">Mobile</a>
            </div>
            <div>
                <h2 className='font-bold text-[18px] pb-7'>Contact</h2>
                <a className='flex gap-4 text-gray' href="#">Why Travlog?</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">Partner with us</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">FAQ’s</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">Blog</a>
            </div>
            <div>
                <h2 className='font-bold text-[18px] pb-7'>Meet Us</h2>
                <a className='flex gap-4 text-gray' href="#">+00 92 1234 56789</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">info@travlog.com</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">205. R Street, New York</a>
                <br />
                <a className='flex gap-4 text-gray' href="#">BD23200</a>
            </div>


        </div>
    )
}

export default Footer
