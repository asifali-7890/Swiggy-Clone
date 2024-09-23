import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Card } from './Card'

export const TopRest = () => {
    const [slide, setSlide ] = useState(0);
    const [category, setCategory] = useState([]);

    async function fetchCatogory() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5710093&lng=88.33000419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setCategory(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
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
        <div className='max-w-[1200px] mx-auto mb-[100px]'>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Kolkata</div>
                <div className='flex'>
                    <div onClick={prevSlide} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowLeft />
                    </div>
                    <div onClick={nextSlide} className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex gap-5 overflow-hidden'>
                {
                    category.map((cat, index) => {
                        return (
                            <div key={index} style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }} className='duration-500'>
                                <Card width='w-[160px] md:w-[280px] shrink-0' {...cat} key={index} />
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 '/>
        </div>
    )
}
