import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {};

    // Student Query data
    const EnquiryHeaders = [
        'Sr.No.',
        'Subject',
        'Full Name',
        'Email',
        'Phone No.',
        'Query',
    ];
    const EnquiryData = [
        {
            col0: '1', col1: 'Community Medical Service & Essential Drugs(CMS & ED)', col2: 'Rajendra Choudhary', col9: 'rajburdak3@gmail.com', col8: '9358191934', col3: 'More information about this course',
        },
        // Add more data objects as needed
    ];

    const EnquiryWidths = [
        60, // Header 1 width
        500, // Header 1 width
        230, // Header 2 width
        250, // Header 3 width
        150, // Header 4 width
        400, // Header 4 width
    ];


    // online addmision data
    const AdmissionHeaders = [
        'Sr.No.',
        'Subject',
        'StudentName',
        'FatherName',
        'MotherName',
        'DOB',
        'Category',
        'Gander',
        'MobileNumber',
        'Email',
        'Address',
        'State',
        'PinCode',
        'Qualification',
        'Adhaar',
        'CollageCode',
        'StudyMode',
        'ExamMode',
        'StudentImage',
        'StudentSignature',
        'Document',
    ];
    const AdmissionData = [
        {
            col0: '1',
            col1: 'Community Medical Service & Essential Drugs(CMS & ED)',
            col2: 'Rajendra Choudhary',
            col3: 'Gnash Choudhary',
            col4: 'Prabhu Devi',
            col5: '09/03/2001',
            col6: 'OBC',
            col7: 'Male',
            col8: '9358191934',
            col9: 'rajburdak3@gmail.com',
            col10: 'Mansarover, Jaipur',
            col11: 'Rajasthan',
            col12: '302022',
            col13: '12th Pass',
            col14: '368197777781',
            col17: '2345',
            col15: 'Online',
            col16: 'Online',
            col18: 'Profile',
            col19: 'signature',
            col20: 'marksheet',
        },
    ];
    const headerWidths = [
        60, // Header 1 width
        400, // Header 1 width
        230, // Header 2 width
        250, // Header 3 width
        200, // Header 4 width
        130, // Header 5 width
        100, // Header 5 width
        100, // Header 5 width
        140, // Header 5 width
        240, // Header 5 width
        300, // Header 5 width
        130, // Header 5 width
        100, // Header 5 width
        120, // Header 5 width
        140, // Header 5 width
        120, // Header 5 width
        120, // Header 5 width
        120, // Header 5 width
        150, // Header 5 width
        150, // Header 5 width
        //... add widths for each header
    ];


    return (
        <>
            <p className='px-10'>Welcome, {username}!</p>
            <div className="w-full min-h-screen my-10">
                <div className='w-11/12 m-auto shadow-sm rounded border-2 mt-2'>
                    <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'> Upload Result</h4>
                    <div className="w-6/12 m-auto flex flex-col gap-2 py-4">
                        <input
                            type="file"
                            // onChange={handleDocumentChange}
                            accept=".jpg, .jpeg, .png"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>

                <div className='w-11/12 m-auto shadow-sm rounded border-2 mt-2'>
                    <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'> Student Enquiry</h4>
                    <div className='w-full h-[50vh] overflow-hidden overflow-x-scroll overflow-y-scroll'>
                        <table className="table-auto w-full">
                            <thead className='bg-green-500' style={{ position: 'sticky', top: 0, color: 'white' }}>
                                <tr className='flex gap-1'>
                                    {EnquiryHeaders.map((header, index) => (
                                        <th key={index} style={{ width: `${EnquiryWidths[index]}px` }} className="flex px-4 py-2 border-b border-gray-200">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {EnquiryData.map((row, index) => (
                                    <tr key={index} className='flex gap-1 bgoder-r-2'>
                                        {Object.values(row).map((value, index) => (
                                            <td key={index} style={{ width: `${EnquiryWidths[index]}px` }} className="px-4 py-2 border-b border-gray-200">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='w-11/12 m-auto shadow-sm rounded border-2 mt-2'>
                    <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'> New Addmission</h4>
                    <div className='w-full h-[50vh] overflow-hidden overflow-x-scroll overflow-y-scroll'>
                        <table className="table-auto w-full">
                        <thead className='bg-green-500' style={{ position: 'sticky', top: 0, color: 'white' }}>
                                <tr className='flex gap-1 bgoder-r-2 border-lime-500'>
                                    {AdmissionHeaders.map((header, index) => (
                                        <th key={index} style={{ width: `${headerWidths[index]}px` }} className="flex px-4 py-2 border-b border-gray-200">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {AdmissionData.map((row, index) => (
                                    <tr key={index} className='flex gap-1 bgoder-r-2'>
                                        {Object.values(row).map((value, index) => (
                                            <td key={index} style={{ width: `${headerWidths[index]}px` }} className="px-4 py-2 border-b border-gray-200">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;