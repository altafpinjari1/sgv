import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from "../../src/assets/images/logo.png";
import india from "../../src/assets/images/Amritmahotsavlogo-black1.png";

function AdmissionReceipt() {
    const { id } = useParams();
    const [admission, setAdmission] = useState(null);

    useEffect(() => {
        const fetchAdmission = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/admission/admission/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAdmission(data);
                } else {
                    console.error('Failed to fetch admission data');
                }
            } catch (error) {
                console.error('Error fetching admission data:', error);
            }
        };

        fetchAdmission();
    }, [id]);

    const generatePDF = () => {
        const input = document.getElementById('receipt-content');
        
        html2canvas(input, { scale: 2 }).then(canvas => { // Use scale for higher quality
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // Use 'mm' and 'a4' for A4 dimensions
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width / 2; // Adjust according to scale
            const imgHeight = canvas.height / 2; // Adjust according to scale
            
            // Calculate the scaling factor
            const widthRatio = pdfWidth / imgWidth;
            const heightRatio = pdfHeight / imgHeight;
            const scaleRatio = Math.min(widthRatio, heightRatio);
            
            const scaledImgWidth = imgWidth * scaleRatio;
            const scaledImgHeight = imgHeight * scaleRatio;
            
            pdf.addImage(imgData, 'PNG', 0, 0, scaledImgWidth, scaledImgHeight);
            pdf.save('admission_receipt.pdf');
        });
    };
    
    if (!admission) return <p>Loading...</p>;

    return (
        <section className='w-full min-h-screen overflow-hidden'>
            <div className='w-full md:w-10/12 m-auto shadow-sm rounded border-2 mt-10'>
                <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'>Admission Receipt</h4>
                <div id="receipt-content" className='w-full md:w-6/12 h-fit m-auto shadow-sm rounded border-2 mt-10 flex flex-col gap-2'>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <img src={logo} alt="" className='w-32 md:w-28' />
                            <div>
                                <h1 className='text-[10px] md:text-sm font-semibold'>स्वामी गुरदासानन्द विद्यापीठ</h1>
                                <h2 className='text-[10px] md:text-sm font-semibold'>Swami Gurdashanand Vidhyapeeth</h2>
                                <h6 className='text-[8px] md:text-[10px] font-normal'>(An autonomous institute under Swami Gurdashanand Vidhyapeeth Council)</h6>
                                <h6 className='text-[8px] md:text-[10px] font-normal text-red-600'>Established Under Section 8(1) Act 2013 Rule 2014 Ministry of Corporate Affairs, Govt. Of India</h6>
                            </div>
                        </div>
                        <div className="ReceiptAmritmahotsav">
                            <img src={india} alt="" className="w-20" />
                        </div>
                    </div>
                    <div className='w-full h-full flex gap-2'>
                        <div className='w-full h-full'>
                            <table className=''>
                                <tbody>
                                    <tr>
                                        <td>Acknowledgment Number</td>
                                        <td>sgv{admission._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Course</td>
                                        <td>{admission.subject}</td>
                                    </tr>
                                    <tr>
                                        <td>Student name</td>
                                        <td>{admission.studentName}</td>
                                    </tr>
                                    <tr>
                                        <td>Father's Name</td>
                                        <td>{admission.fatherName}</td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Name</td>
                                        <td>{admission.motherName}</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <td>{new Date(admission.DOB).toLocaleDateString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{admission.category}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{admission.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{admission.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{admission.mobileNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Email Address</td>
                                        <td>{admission.email}</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>{admission.state}</td>
                                    </tr>
                                    <tr>
                                        <td>Pin Code</td>
                                        <td>{admission.pinCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Qualification</td>
                                        <td>{admission.qualification}</td>
                                    </tr>
                                    <tr>
                                        <td>Voter/Adhaar/PAN</td>
                                        <td>{admission.adhaar}</td>
                                    </tr>
                                    <tr>
                                        <td>Collage Code</td>
                                        <td>{admission.collageCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Study Mode</td>
                                        <td>{admission.studyMode}</td>
                                    </tr>
                                    <tr>
                                        <td>Exam Mode</td>
                                        <td>{admission.examMode}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='w-6/12 m-auto my-10'>
                    <button
                        onClick={generatePDF}
                        className="bg-[#323D66] text-[#FFF] py-2 px-10 rounded-md flex items-center justify-center gap-2"
                    >
                        Download Receipt
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AdmissionReceipt;
