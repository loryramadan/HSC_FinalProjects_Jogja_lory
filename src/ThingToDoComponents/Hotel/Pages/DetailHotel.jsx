import React from 'react'
import {useState, useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import ContactHotel from '../Components/ContactHotel'
import ReuseNav from '/src/Components/ReuseableNav/ReuseNav'
import Footer from '/src/Components/Footer/Footer'

import HotelApi from '/src/API/apiHotel.js'


const DetailHotel = () => {
    const navigateToHotelPageJogja = useNavigate ()
    const {id} = useParams()
    const [detail, setDetail] = useState({})

    const callApi = async() => {
        HotelApi.detail(id).then((res) => {
            setDetail(res)
        })
    }

    useEffect(() => {
        callApi()
    },[])

    return (
        <div>
            <ReuseNav />
                <div className='drop-shadow-xl object-cover grid grid-cols-4 lg:grid-cols-12 lg:h-[908.80px]'>
                    <img src={detail.image} className='object-cover h-[681.59px] col-span-4 lg:col-span-6' />
                    <div className='bg-[#F1F8FF] pb-5 px-3 pt-10 flex flex-col justify-center items-center h-fit col-span-4 lg:col-span-6 xl:col-span-4'>
                        <div className='flex flex-col justify-between gap-3 items-center md:w-[75vw] lg:w-[45vw] xl:w-[30vw] md:gap-2 md:flex-row'>
                            <h2 className='font-semibold text-base font-Poppins'>Accommodation </h2>
                            <div className='flex gap-2'>
                                <div className='flex gap-1 items-center font-normal font-Poppins text-button bg-button2 px-4 py-2 rounded-xl drop-shadow-lg cursor-pointer hover:brightness-75'>
                                    <span>Share</span>
                                    <i className='bx bx-share-alt text-[20px] text-button'></i>
                                </div>
                                <div className='flex gap-1 items-center font-normal font-Poppins text-button bg-button2 px-4 py-2 rounded-xl drop-shadow-lg cursor-pointer hover:brightness-75'>
                                    <span>Save</span>
                                    <i className='bx bx-heart text-[20px] text-button'></i>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-5  lg:justify-between'>
                            <div>
                                <div className='mt-8 flex justify-start'>
                                    <h1>Jogja Hotel</h1>
                                </div>
                                <div className='mt-3 text-[12px] text-justify font-normal font-Poppins md:w-[75vw] lg:w-[25rem] lg:text-[14px] lg:mt-6'>
                                    <p>Jogja Hotel Tampere rooms invite you to perfect rest and enjoyment! Our selection of rooms offers a mystical atmosphere and story all designed to make your stay more enjoyable. We are happy to tell you more about the details you can find in our rooms. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactHotel />
                <div className='w-screen h-[80px] flex justify-start items-center pl-4 gap-3
                    sm:pr-5
                '>
                    <div className='flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14'
                        onClick={() => navigateToHotelPageJogja('/things-to-do/hotel-jogja')}>
                        <button 
                            id='botButton' 
                            className='text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
                            >
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                        <p className='font-Poppins'>Back to Hotel Page</p>
                    </div>
                </div>
            <Footer />
        </div>
      )
    }

export default DetailHotel
