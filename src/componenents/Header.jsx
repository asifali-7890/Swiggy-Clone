import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdDiscount } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export const Header = () => {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <CiSearch />,
            name: 'Search'
        },
        {
            icon: <MdDiscount />,
            name: 'Offer',
            sup: 'NEW',
        },
        {
            icon: <FaHandsHelping />,
            name: 'Help'
        },
        {
            icon: <FaSignInAlt />,
            name: 'Sign In'
        },
        {
            icon: <CiShoppingCart />,
            name: 'Cart',
            sup: '0'
        }
    ]

    return (
        <>
            <div className='blackOverlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden',
                zIndex: 9999999     
            }}>
                <div onClick={(e) => {
                    e.stopPropagation(); // prevent
                }} className='w-[300px] md:w-[500px] bg-white h-full absolute duration-[400ms]'
                    style={{
                        left: toggle ? '0%' : '-100%',
                    }}
                >

                </div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
                <div className='flex items-center max-w-[1200px] mx-auto '>
                    <div className='w-[100px] '>
                        <img src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-2048x1152.png' className='w-full' alt="Not present" />
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black]'>Shibpur </span>
                        Choura Bustee, Shibpur, Howrah <RxCaretDown onClick={showSideMenu} fontSize={25} className="cursor-pointer inline text-[#fc8019]" />
                    </div>
                    <nav className='hidden md:flex list-none gap-10   ml-auto text-[18px] font-semibold'>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}