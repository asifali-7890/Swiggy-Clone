import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Catogory = () => {
    const [category, setCategory] = useState([]);
    const [slide, setSlide ] = useState(0);

    async function fetchCatogory() {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5710093&lng=88.33000419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
                setCategory(json.data.cards[0].card.card.imageGridCards.info);

        };
        
    useEffect(() => {
        fetchCatogory();
    }, [])

    const nextSlide = () => {
        if(category.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    }
    
    return (
        <div className='max-w-[1200px] mx-auto mt-28 '>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Whats's on your mind? </div>
                <div className='flex'>
                    <div onClick={prevSlide} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowLeft />
                    </div>
                    <div onClick={nextSlide} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex  overflow-hidden '>
                {
                    category.map(
                        (cat, index) => {
                            return (
                                <div style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }} key={index} className='duration-500 w-[150px] shrink-0' >
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cat.imageId} alt="" />
                                </div>
                            )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 '/>
            
        </div>
    )
}

