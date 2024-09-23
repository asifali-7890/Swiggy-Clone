import React, { useEffect, useState } from 'react'

export const AreaRest = () => {
    const [category, setCategory] = useState([]);
    const [category1, setCategory1] = useState([]);
    const [category2, setCategory2] = useState([]);

    async function fetchCategory() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5710093&lng=88.33000419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();

            if (Array.isArray(json.data?.cards[6]?.card.card?.brands)) {
                setCategory(json.data?.cards[6]?.card.card?.brands);
                setCategory1(json.data?.cards[7]?.card.card?.brands);
                setCategory2(json.data?.cards[8]?.card.card?.brands);
            } else {
                console.error('Data is not an array:', json.data?.cards[6]?.card.card?.brands);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [category]);

    return (
        <div className='max-w-[1200px] mx-auto '>
            <div className='text-[25px] font-bold block'>Best Places to Eat Across Cities</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 font-sans'>
                {
                    category?.map((cat, index) => {
                        return (
                            <div key={index} className='thirdMakeup'>
                                    <div className='secondMakeup'>
                                        <div className='makeup'>
                                            {cat?.text}
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 w-full mt-16' />



            <div className='text-[25px] font-bold block'>Best Cuisines Near Me</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-8'>
                {
                    category1?.map((cat, index) => {
                        return (
                            <div key={index} className='thirdMakeup'>
                                    <div className='secondMakeup'>
                                        <div className='makeup'>
                                            {cat?.text}
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 w-full mt-16' />


            <div className='text-[25px] font-bold block mt-28'>Explore Every Restaurants Near Me</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-8'>
                {
                    category2?.map((cat, index) => {
                        return (
                            <div key={index} className='thirdMakeup'>
                                    <div className='secondMakeup'>
                                        <div className='makeup'>
                                            {cat?.text}
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[1px] my-4 w-full mt-16' />
        </div>
    )
}
