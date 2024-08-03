import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logo from "../../src/assets/images/logo.png"
import india from "../../src/assets/images/Amritmahotsavlogo-black1.png"



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    gsap.to('.side-nav', {
      x: isOpen ? 0 : '100%',
      duration: 0.7,
      delay: 0.1,
    });
  }, [isOpen]);


  return (
    <>
      <section className='w-full h-fill relative text-[#111] z-10'>
        <div className="header md:px-4 py-4 w-full h-fit flex items-center justify-between px-2">
          <div className='logo flex items-center'>
            <div className='w-32 md:w-36'>
              <img src={logo} alt="Swami Gurdashand Vidhyapeeth" className='' />
            </div>
            <div>
              <h1 className='text-[10px] md:text-lg font-semibold'>स्वामी गुरदासानन्द विद्यापीठ</h1>
              <h2 className='text-[10px] md:text-lg font-semibold'>Swami Gurdashanand Vidhyapeeth</h2>
              <h6 className='text-[8px] md:text-[13px] font-normal'>(An autonomous institute under Swami Gurdashanand Vidhyapeeth Council)</h6>
              <h6 className='text-[8px] md:text-[13px] font-normal text-red-600'>Established Under Section 8(1) Act 2013 Rule 2014 Ministry of Corporate Affairs, Govt. Of India</h6>
            </div>
          </div>

          <div className="flex items-center gap-20">
            <div className='hidden md:block'>
              <div className='flex gap-4'>
                <Link to='/' className='text-2xl md:text-lg font-normal'>Home</Link>
                <Link to='/Recognition' className='text-2xl md:text-lg font-normal'>Recognition</Link>
                <Link to='/Courses' className='text-2xl md:text-lg font-normal'>Courses</Link>
                <Link to='/Members' className='text-2xl md:text-lg font-normal'>Members</Link>
                <Link to='/Career' className='text-2xl md:text-lg font-normal'>Career</Link>
              </div>
            </div>
            <div className='hidden md:block'>
              <img src={india} alt="Swami Gurdashand Vidhyapeeth" className='w-24' />
            </div>
          </div>

          <div className='toggle cursor-pointer md:hidden' onClick={handleToggleClick}>
            <div
              className="flex justify-center items-center w-12 h-8 text-2xl bg-[#323D66] text-[#FFF] rounded-lg cursor-pointer"
              onClick={handleClick}
            >
              {isActive ? (
                <i class="ri-close-fill"></i>
              ) : (
                <i class="ri-equal-line"></i>
              )}
            </div>
          </div>
        </div>

        <div className=
          {`side-nav w-[100%] sm:w-1/4 h-[88vh] bg-[#FFF] absolute top-30 right-0 ${isOpen ? 'translate-x-0' : 'translate-x-[100%]'
            }`}>
          <div className='flex flex-col items-center py-20 ps-6 gap-6'>
            <Link to='/' className='text-2xl md:text-lg font-normal' onClick={handleToggleClick}>Home</Link>
            <Link to='/Recognition' className='text-2xl md:text-lg font-normal' onClick={handleToggleClick}>Recognition</Link>
            <Link to='/Courses' className='text-2xl md:text-lg font-normal' onClick={handleToggleClick}>Courses</Link>
            <Link to='/Members' className='text-2xl md:text-lg font-normal' onClick={handleToggleClick}>Members</Link>
            <Link to='/Career' className='text-2xl md:text-lg font-normal' onClick={handleToggleClick}>Career</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar