import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'boxicons';
import {useContext} from 'react'
import { CartContext } from '../contexts/CartContext';

function ReuseNavRight() {

    const navigateToMenuJogja = useNavigate ()  
    const navigateToSavedPageJogja = useNavigate () 
    const navigateToSearchPageJogja = useNavigate () 
    const navigateToCartPageJogja = useNavigate () 
    const {cartProduct} = useContext(CartContext)

  return (
    <div className='flex gap-[1rem] w-fit h-[40px] 
        max-[1023px]:hidden'
        >

        <a href="">
            <div className='flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out  px-2'>
                <p className='font-bold text-button'>EN</p>
                <div className='w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center transition duration-300 ease-in-out text-[#000]'>
                    <i className='bx bx-globe'></i>
                </div>
            </div>
        </a>
        <div onClick={() => navigateToSearchPageJogja ('/search-page')}
                className='w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer  text-[#000]'>
                <i className='bx bx-search-alt'></i>
        </div>
        <div 
            onClick={() => navigateToSavedPageJogja('/saved-page')}
            className='p-[8px] text-2xl w-[40px] flex items-center justify-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer text-[#000]'>
                <i className='bx bx-heart'></i>
        </div>
        <div 
            onClick={() => navigateToCartPageJogja('/cart-page')}
            className='p-[8px] text-2xl w-[40px] flex items-center justify-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer text-[#000]'>
                <i className='bx bx-cart'>({cartProduct.length})</i>
        </div>
        <div 
            onClick={() => navigateToMenuJogja('/menu-jogja')}
            className='p-[8px] h-[40px] flex justify-center items-center text-2xl rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer text-[#000]'>
                <i className='bx bx-menu'></i>
        </div>


    </div>
  )
}


export default ReuseNavRight
