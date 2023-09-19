import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'

import './hotelCarousel.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { FreeMode } from 'swiper/modules';


import HotelApi from '/src/API/apiHotel.js'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {AiFillStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

function HotelCarousel() {
    const [hotel, setHotel] = useState([])
    const callJson = async() => {
      HotelApi.hotel().then((res) => {
        setHotel(res)
      })
    }
    useEffect(() => {
      callJson()
    }, [])
    console.log(hotel)
    return (
      <div className='flex flex-col justify-center items-center mb-10'>
        <div className='container2 w-[95vw] h-[500px]'>
         <section className='justify-items-center items-center'>
           <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{clickable: true,}}
            modules={[FreeMode, Pagination]}
            className="carousel2"
           >
             {hotel ? hotel.map((item, index) => {
                return(
               <SwiperSlide key={index}>
                   <Link to={`/things-to-do/hotel-jogja/${item.id}`}>
                 <div key={index} className='text-left shadow-lg h-[450px] bg-[#E8F4FE] rounded-xl card'>
                    <img className='w-[240px] h-[320px] object-cover rounded-t-lg absolute hotel-image' src={item.image} alt={item.title} />
                   <button className='relative rounded-r-lg p-3 w-13 h-12 bg-button2 text-button top-48'><AiOutlineHeart size={25} /></button>
                   <div className='shadow-xl p-4 space-y-4 relative bg-white w-[180px] h-[180px] rounded-r-lg top-48'>
                     <p className='text-end text-[14px]'>{item.price}/night</p>
                     <h2>{item.title}</h2>
                     <div className='flex justify-end items-center'>
                         <AiFillStar />
                         <span>{item.rate}</span>
                     </div>
                   </div>
                 </div>
                </Link>
               </SwiperSlide>
               )
              }):<h2>hello</h2>}
           </Swiper>
         </section>
       </div>
       <div>
            <button className='flex justify-center gap-3 items-center bg-button2 px-4 py-2 rounded-xl'>
                <p>Slide to see more</p>
                <div className='animate-slide-left flex justify-center items-center'>
                    <box-icon name='right-arrow-alt' color='#000' ></box-icon>
                </div>
            </button>
       </div>
    </div>
    )
  }

export default HotelCarousel
