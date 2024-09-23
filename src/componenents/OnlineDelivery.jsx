import React, { useRef, useEffect, useState } from 'react'
import { Card } from './Card';

export const OnlineDelivery = () => {
    const [category, setCategory] = useState([]);

    async function fetchCatogory() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5710093&lng=88.33000419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setCategory(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    useEffect(() => {
        fetchCatogory();
    }, [])

    const [isSticky, setIsSticky] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                // Calculate the top offset of the target element
                const { top } = targetRef.current.getBoundingClientRect();
                // Update the sticky state based on whether top is less than or equal to 0
                setIsSticky(top <= 0);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures effect runs only once


    return (
        <div ref={targetRef} className='max-w-[1200px] mx-auto mb-[100px]'>
            <div className='flex items-center justify-between my-5'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Kolkata</div>
            </div>
            <div className={`container ${isSticky ? 'fixed top-0 z-[999999] bg-white' : ''}`} >
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 md:overflow-auto overflow-hidden '>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Filter</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Sort By</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Fast Delivery</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>New on Swiggy</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Ratings 4.0+</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Pure Veg</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Offers</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Rs. 300-Rs. 600</div>
                    <div className='border border-gray-400 p-3 rounded-md shadow'>Less than Rs. 300</div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    category.map((cat, index) => {
                        return (
                            <div key={index} className='mb-[10px]'>
                                <Card {...cat} key={index} />
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 ' />
        </div>
    )
}
