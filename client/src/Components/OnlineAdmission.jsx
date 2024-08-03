import React, { useState } from 'react';
import axios from "axios";

function OnlineAdmission() {
    // const [subject, setSubject] = useState('');
    // const [studentName, setStudentName] = useState('');
    // const [fatherName, setFatherName] = useState('');
    // const [motherName, setMotherName] = useState('');
    // const [DOB, setDOB] = useState('');
    // const [category, setCategory] = useState('');
    // const [gander, setGander] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [state, setState] = useState('');
    // const [pinCode, setPinCode] = useState('');
    // const [qualification, setQualification] = useState('');
    // const [adhaar, setAdhaar] = useState('');
    // const [collageCode, setCollageCode] = useState('');
    // const [studyMode, setStudyMode] = useState('');
    // const [examMode, setExamMode] = useState('');
    // const [studentImage, setStudentImage] = useState(null);
    // const [studentSignature, setStudentSignature] = useState(null);
    // const [document, setDocument] = useState(null);

    const subjects = [
        { value: '', label: 'Select a subject' },
        { value: 'Community Medical Service & Essential Drugs(CMS & ED)', label: 'Community Medical Service & Essential Drugs(CMS & ED)' },
        { value: 'Diploma in Naturopathy & Yogic Science (DNYS)', label: 'Diploma in Naturopathy & Yogic Science (DNYS)' },
        { value: 'GENERAL DUTY ASSISTANT (GDA)', label: 'GENERAL DUTY ASSISTANT (GDA)' },
        { value: 'DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY( D.M.L.T.)', label: 'DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY( D.M.L.T.)' },
        { value: 'FIRST AID AND PATIENT CARE(FAP)', label: 'FIRST AID AND PATIENT CARE(FAP)' },
        { value: 'COMMUNITY HEALTH WORKER(CHW)', label: 'COMMUNITY HEALTH WORKER(CHW)' },
        { value: 'FOUNDATION COURSE IN YOGA', label: 'FOUNDATION COURSE IN YOGA' },
        { value: 'CERTIFICATE IN YOGASAN AND PRANAYAM', label: 'CERTIFICATE IN YOGASAN AND PRANAYAM' },
        { value: 'CERTIFICATE IN YOGA', label: 'CERTIFICATE IN YOGA' },
        { value: 'DIPLOMA IN YOGA TEACHER THERAPY EDUCATOR', label: 'DIPLOMA IN YOGA TEACHER THERAPY EDUCATOR' },
        { value: 'P.G. DIPLOMA IN YOGA TEACHER', label: 'P.G. DIPLOMA IN YOGA TEACHER' },
        { value: 'Certificate In Medical Dresser', label: 'Certificate In Medical Dresser' },
    ];

    const categories = [
        { value: '', label: 'Select a category' },
        { value: 'SC', label: 'SC' },
        { value: 'ST', label: 'ST' },
        { value: 'OBC', label: 'OBC' },
        { value: 'GEN', label: 'GEN' },
    ];

    const Ganders = [
        { value: '', label: 'Select a category' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
    ];

    const states = [
        { value: "", label: "Select a state" },
        { value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Chhattisgarh", label: "Chhattisgarh" },
        { value: "Goa", label: "Goa" },
        { value: "Gujarat", label: "Gujarat" },
        { value: "Haryana", label: "Haryana" },
        { value: "Himachal Pradesh", label: "Himachal Pradesh" },
        { value: "Jharkhand", label: "Jharkhand" },
        { value: "Karnataka", label: "Karnataka" },
        { value: "Kerala", label: "Kerala" },
        { value: "Madhya Pradesh", label: "Madhya Pradesh" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Manipur", label: "Manipur" },
        { value: "Meghalaya", label: "Meghalaya" },
        { value: "Mizoram", label: "Mizoram" },
        { value: "Nagaland", label: "Nagaland" },
        { value: "Odisha", label: "Odisha" },
        { value: "Punjab", label: "Punjab" },
        { value: "Rajasthan", label: "Rajasthan" },
        { value: "Sikkim", label: "Sikkim" },
        { value: "Tamil Nadu", label: "Tamil Nadu" },
        { value: "Telangana", label: "Telangana" },
        { value: "Tripura", label: "Tripura" },
        { value: "Uttar Pradesh", label: "Uttar Pradesh" },
        { value: "Uttarakhand", label: "Uttarakhand" },
        { value: "West Bengal", label: "West Bengal" }
    ];

    const studyModes = [
        { value: '', label: 'Select study mode' },
        { value: 'REGULAR', label: 'REGULAR' },
        { value: 'DISTANCE', label: 'DISTANCE' },
    ];

    const examModes = [
        { value: '', label: 'Select study mode' },
        { value: 'ONLINE', label: 'ONLINE' },
        { value: 'OFFLINE', label: 'OFFLINE' },
        { value: 'ON DEMAND', label: 'ON DEMAND' },
    ];

    // const handleStudentImageChange = (event) => {
    //     setStudentImage(event.target.files[0]);
    // };

    // const handleStudentSignatureChange = (event) => {
    //     setStudentSignature(event.target.files[0]);
    // };

    // const handleDocumentChange = (event) => {
    //     setDocument(event.target.files[0]);
    // };

    

    // new code

    const [input, setInput] = useState({
        subject:"",
        studentName:"",
        fatherName:"",
        motherName:"",
        DOB:"",
        category:"",
        gender:"",
        mobileNumber:"",
        email:"",
        address:"",
        pinCode:"",
        state:"",
        adhaar:"",
        qualification:"",
        collageCode:"",
        studyMode:"",
        examMode:"",
        studentImage:"",
        studentSignature:"",
        document:""
    })

    const changeHandler = (e)=>{
        setInput({...input, [e.target.id]:e.target.value})

    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        // try {
        //     const res = await axios.post("https://localhost:8080/api/v1/user/onlineAdmission", input, {
        //         headers:{
        //             'Content-Type':"application:json"
        //         },
        //         withCredentials:true
        //     });
        //     console.log(res.data);

        // } catch (error) {
        //     console.log(error);
        // }

    }

    return (
        <>
            <section className="w-full bg-[#323D66] py-4">
                <h2 className="w-10/12 m-auto text-2xl text-[#FFF]">Addmission Form</h2>
            </section>

            <section className="w-full md:w-7/12 h-fit md:px-10 m-auto shadow-xl">
                <form onSubmit={submitHandler} className="py-6">
                    <div className="w-full mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <select
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            value={input.subject}
                            onChange={changeHandler}
                            required
                        >
                            {subjects.map((subject) => (
                                <option key={subject.value} value={subject.value}>
                                    {subject.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Student Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="studentName"
                                type="text"
                                placeholder="Enter Name"
                                value={input.studentName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Father Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fatherName"
                                type="text"
                                placeholder="Enter Name"
                                value={input.fatherName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Mother Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="motherName"
                                type="text"
                                placeholder="Enter Name"
                                value={input.motherName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Date Of Birth</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="DOB"
                                type="date"
                                placeholder="Enter Date of Birth"
                                value={input.DOB}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Category</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                value={input.category}
                                onChange={changeHandler}
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Gander</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gender"
                                value={input.gender}
                                onChange={changeHandler}
                                required
                            >
                                {Ganders.map((gander) => (
                                    <option key={gander.value} value={gander.value}>
                                        {gander.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Mobile Number</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobileNumber"
                                type="text"
                                placeholder="Enter Number"
                                value={input.mobileNumber}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Email</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                value={input.email}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Address</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="Enter Address"
                                value={input.address}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="">PIN Code</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="pinCode"
                                type="text"
                                placeholder="Enter Pincode"
                                value={input.pinCode}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>


                    <div className="mb-4 flex gap-2">
                        <div className="w-full mb-4">
                            <label htmlFor="">States</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="state"
                                value={input.state}
                                onChange={changeHandler}
                                required
                            >
                                {states.map((state) => (
                                    <option key={state.value} value={state.value}>
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="">Adhaar</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="adhaar"
                                type="text"
                                placeholder="Enter Adhaar"
                                value={input.adhaar}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Qualification</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="qualification"
                                type="text"
                                placeholder="Enter Qualification"
                                value={input.qualification}
                                onChange={changeHandler}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="">Collage Code</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="collageCode"
                                type="text"
                                placeholder="Enter Collage Code"
                                value={input.collageCode}
                                onChange={changeHandler}
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Study Mode</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="studyMode"
                                value={input.studyMode}
                                onChange={changeHandler}
                                required
                            >
                                {studyModes.map((studyMode) => (
                                    <option key={studyMode.value} value={studyMode.value}>
                                        {studyMode.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="">Exam Mode</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="examMode"
                                value={input.examMode}
                                onChange={changeHandler}
                                required
                            >
                                {examModes.map((examMode) => (
                                    <option key={examMode.value} value={examMode.value}>
                                        {examMode.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="w-full mb-4">
                        <label htmlFor="">Student Image</label>
                        <input
                        id='studentImage'
                            type="file"
                            onChange={changeHandler}
                            value={input.studentImage}
                            accept=".jpg, .jpeg, .png"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {/* {studentImage && (
                            <p>Selected file: {studentImage.name}</p>
                        )} */}
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="">Student Signature</label>

                            <input
                            id='studentSignature'
                                type="file"
                                value={input.studentSignature}
                                onChange={changeHandler}
                                accept=".jpg, .jpeg, .png"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {/* {studentSignature && (
                                <p>Selected file: {studentSignature.name}</p>
                            )} */}
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor=""> Student Document</label>
                            <input
                            id='document'
                                type="file"
                                value={input.document}
                                onChange={changeHandler}
                                accept=".jpg, .jpeg, .png"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />

                            {/* {document && (
                                <p>Selected file: {document.name}</p>
                            )} */}
                        </div>
                    </div>


                    <div className='w-fit m-auto mt-10'>
                        <button type="submit" className="bg-[#323D66] text-[#FFF] py-2 px-20 rounded-md flex items-center justify-center gap-2">
                            Register Now
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default OnlineAdmission;