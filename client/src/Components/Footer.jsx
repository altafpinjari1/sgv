import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../../src/assets/images/logo.png"

function Footer() {
    return (
        <>
            <footer className="w-full h-fit px-4 md:px-10 pt-20 pb-10 bg-[#323D66]">
                <div className="flex justify-evenly flex-col md:flex-row gap-10 ">
                    <div className="w-full md:w-1/3 md:pr-12 text-center">
                        <img src={logo} alt="Swami Gurdashand Vidhyapeeth" className='w-40 m-auto' />
                        <p className='text-[12px] text-zinc-100'>(An autonomous institute under Swami Gurdashanand Vidhyapeeth Council)</p>
                        <p className='text-[14px] text-red-500'>Established Under Section 8(1) Act 2013 Rule 2014 Ministry of Corporate Affairs, Govt. Of India</p>
                    </div>
                    <div className="w-full md:w-2/3  flex justify-between flex-col md:flex-row">
                        <div className="mb-8">
                            <h2 className="text-xl font-normal text-zinc-100 mb-4">Importent Links</h2>
                            <ul className="space-y-2">
                                <li><Link to='/' className="text-sm text-zinc-100 hover:text-gray-300">Admit Card</Link></li>
                                <li><Link to='/Result' className="text-sm text-zinc-100 hover:text-gray-300">Result</Link></li>
                                <li><Link to='/Login' className="text-sm text-zinc-100 hover:text-gray-300">Admin Login</Link></li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-normal text-zinc-100 mb-4">Admissions</h2>
                            <ul className="space-y-2">
                                <li><Link to='/OnlineAdmission' className="text-sm text-zinc-100 hover:text-gray-300">Online Admission</Link></li>
                                <li><Link to="/AdmissionReceipt/:id" className="text-sm text-zinc-100 hover:text-gray-300">Admission Receipt</Link></li>
                                <li><Link href="#" className="text-sm text-zinc-100 hover:text-gray-300">Online Admission(Second/Third Year/Sem)</Link></li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-normal text-zinc-100 mb-4">Get in touch</h2>
                            <ul className="space-y-2">
                                <li className="text-sm text-zinc-100 hover:text-gray-300"><i class="ri-phone-line"></i> +91 9680744189</li>
                                <li className="text-sm text-zinc-100 hover:text-gray-300"><i class="ri-map-pin-line"></i> Swami Gurdashanand Vidhyapeeth, Jaipur</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="mt-16 border-t border-gray-300 pt-4 text-center text-gray-300">
                    <p>&copy; Copyright 2022. SGVidhyapeeth. All Right Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer