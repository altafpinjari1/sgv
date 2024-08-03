import React from 'react'

import logo from "../../src/assets/images/logo.png"
import india from "../../src/assets/images/Amritmahotsavlogo-black1.png"

function AdmissionReceipt() {
    return (
        <>
            <section className='w-full min-h-screen overflow-hidden'>
                <div className='w-full md:w-10/12 m-auto shadow-sm rounded border-2 mt-10'>
                    <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'>Admission Receipt</h4>
                    {/* print section */}

                        <div className='w-full md:w-6/12 h-fit m-auto shadow-sm rounded border-2 mt-10 flex flex-col gap-2'>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center">
                                    <img src={logo} alt="" className='w-32 md:w-28' />
                                    <div>
                                        <h1 className='text-[10px] md:text-sm font-semibold'>स्वामी गुरदासानन्द विद्यापीठ</h1>
                                        <h2 className='text-[10px] md:text-sm font-semibold'>Swami Gurdashanand Vidhyapeeth</h2>
                                        <h6 className='text-[8px] md:text-[10px] font-normal'>(An autonomous institute under Swami Gurdashanand Vidhyapeeth Council)</h6>
                                        <h6 className='text-[8px] md:text-[10px] font-normal text-red-600'>Established Under Section 8(1) Act 2013 Rule 2014 Ministry of Corporate Affairs, Govt. Of India</h6>
                                    </div>
                                </div>
                                <div class="ReceiptAmritmahotsav">
                                    <img src={india} alt="" class="w-20" />
                                </div>
                            </div>
                            <div className='w-full h-full flex gap-2'>
                                <div className='w-full h-full'>
                                    <table className=''>
                                        <tr>
                                            <td>Acknowledgment Number</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Course</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Student name</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Father's Name</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Mother's Name</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Category</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Gender</td>
                                            <td></td>
                                        </tr>


                                        <tr>
                                            <td>Address</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Mobile Number</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Email Address</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>State</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Pin Code</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Qualification</td>
                                            <td></td>
                                        </tr>


                                        <tr>
                                            <td>Voter/Adhaar/PAN</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Collage Code</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Study Mode</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Exam Mode</td>
                                            <td></td>
                                        </tr>

                                    </table>
                                </div>

                            </div>
                        </div>

                    {/* print section */}

                    <div className='w-6/12 m-auto my-10'>
                        <button
                            type="submit"
                            className="bg-[#323D66] text-[#FFF] py-2 px-10 rounded-md flex items-center justify-center gap-2"
                        >
                            Download Receipt
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdmissionReceipt