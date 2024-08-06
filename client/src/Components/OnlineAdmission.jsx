import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OnlineAdmission() {
    const navigate = useNavigate();


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
        { value: 'Certificate In Medical Dresser', label: 'Certificate In Medical Dresser' }
    ];

    const categories = [
        { value: '', label: 'Select a category' },
        { value: 'SC', label: 'SC' },
        { value: 'ST', label: 'ST' },
        { value: 'OBC', label: 'OBC' },
        { value: 'GEN', label: 'GEN' }
    ];

    const genders = [
        { value: '', label: 'Select Gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
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
        { value: 'DISTANCE', label: 'DISTANCE' }
    ];

    const examModes = [
        { value: '', label: 'Select exam mode' },
        { value: 'ONLINE', label: 'ONLINE' },
        { value: 'OFFLINE', label: 'OFFLINE' },
        { value: 'ON DEMAND', label: 'ON DEMAND' }
    ];

    const [input, setInput] = useState({
        subject: "",
        studentName: "",
        fatherName: "",
        motherName: "",
        DOB: "",
        category: "",
        gender: "",
        mobileNumber: "",
        email: "",
        address: "",
        pinCode: "",
        state: "",
        adhaar: "",
        qualification: "",
        collageCode: "",
        studyMode: "",
        examMode: "",
        studentImage: null,
        studentSignature: null,
        document: null
    });

    const changeHandler = (e) => {
        const { id, value, files } = e.target;
        if (files) {
            setInput({ ...input, [id]: files[0] });
        } else {
            setInput({ ...input, [id]: value });
        }
    };
    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in input) {
            formData.append(key, input[key]);
        }

        try {
            const response = await fetch('http://localhost:5000/api/admission/onlineAdmission', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            if (response.ok) {
                const result = await response.json();
                const admissionId = result._id; // Assuming the ID is returned in the response
                navigate(`/AdmissionReceipt/${admissionId}`);
            } else {
                console.error('Submission failed:', response.status);
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };

    return (
        <>
            <section className="w-full bg-[#323D66] py-4">
                <h2 className="w-10/12 m-auto text-2xl text-[#FFF]">Admission Form</h2>
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
                            <label htmlFor="studentName">Student Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="studentName"
                                type="text"
                                placeholder='Student Name'
                                value={input.studentName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="fatherName">Father Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fatherName"
                                type="text"
                                placeholder='Father Name'
                                value={input.fatherName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="motherName">Mother Name</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="motherName"
                                type="text"
                                placeholder='Mother Name'
                                value={input.motherName}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="DOB">Date of Birth</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="DOB"
                                type="date"
                                value={input.DOB}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="category">Category</label>
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
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gender"
                                value={input.gender}
                                onChange={changeHandler}
                                required
                            >
                                {genders.map((gender) => (
                                    <option key={gender.value} value={gender.value}>
                                        {gender.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobileNumber"
                                type="text"
                                placeholder='Mobile Number'
                                value={input.mobileNumber}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email">Email</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder='Email'
                                value={input.email}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address">Address</label>
                        <textarea
                            className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            placeholder='Address'
                            value={input.address}
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="pinCode">Pin Code</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="pinCode"
                                type="text"
                                placeholder='Pin Code'
                                value={input.pinCode}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="state">State</label>
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
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="adhaar">Aadhaar Number</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="adhaar"
                                type="text"
                                placeholder='Aadhaar Number'
                                value={input.adhaar}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="qualification">Qualification</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="qualification"
                                placeholder='Qualification'
                                type="text"
                                value={input.qualification}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="collageCode">Collage Code</label>
                            <input
                                className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="collageCode"
                                type="text"
                                placeholder='Collage Code'
                                value={input.collageCode}
                                onChange={changeHandler}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="studyMode">Study Mode</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="studyMode"
                                value={input.studyMode}
                                onChange={changeHandler}
                                required
                            >
                                {studyModes.map((mode) => (
                                    <option key={mode.value} value={mode.value}>
                                        {mode.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <div className="w-full">
                            <label htmlFor="examMode">Exam Mode</label>
                            <select
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="examMode"
                                value={input.examMode}
                                onChange={changeHandler}
                                required
                            >
                                {examModes.map((mode) => (
                                    <option key={mode.value} value={mode.value}>
                                        {mode.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="studentImage">Student Image</label>
                        <input
                            className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="studentImage"
                            type="file"
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="studentSignature">Student Signature</label>
                        <input
                            className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="studentSignature"
                            type="file"
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="document">Document</label>
                        <input
                            className="border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="document"
                            type="file"
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default OnlineAdmission;
