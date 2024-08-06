import React, { useState } from 'react';

function SearchStudent() {
    const [enrollNo, setEnrollNo] = useState('');
    const [student, setStudent] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/search?enrollNo=${enrollNo}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Log the search data to the console

                if (data.length > 0) {
                    setStudent(data[0]); // Use the first element in the array
                    setMessage('');
                } else {
                    setStudent(null);
                    setMessage('Student not found');
                }
            } else if (response.status === 404) {
                setStudent(null);
                setMessage('Student not found');
            } else {
                setStudent(null);
                setMessage('An error occurred');
            }
        } catch (error) {
            console.error('An error occurred:', error); // Log any errors that occur
            setStudent(null);
            setMessage('An error occurred');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={enrollNo}
                onChange={(e) => setEnrollNo(e.target.value)}
                placeholder="Enter Enrollment Number"
            />
            <button onClick={handleSearch}>Search</button>

            {message && <p>{message}</p>}
            {student && (
                <div>
                    <p>Name: {student.Name}</p>
                    <p>Enrollment Number: {student.Enroll_No}</p>
                    <p>Course Code: {student.Course_Code}</p>
                    <p>Course Duration: {student.Course_Duration}</p>
                    <p>Division: {student.Division}</p>
                    <p>Exam Type: {student.Exam_Type}</p>
                    <p>Father's Name: {student.Father_name}</p>
                    <p>Grand Total: {student.Grand_total}</p>
                    <p>Institute Name: {student.Institute_Name}</p>
                    <p>Maximum Marks: {student.Maximum_marks}</p>
                    <p>Minimum Pass Marks: {student.Minimum_Pass_marks}</p>
                    <p>Obtained Marks One: {student.Obtained_marks_One}</p>
                    <p>Obtained Marks Two: {student.Obtained_marks_Two}</p>
                    <p>Percentage: {student.Percentage}</p>
                    <p>Regular/Private: {student.Regular_Private}</p>
                    <p>Result: {student.Result}</p>
                    <p>Roll Number: {student.Roll_No}</p>
                    <p>Subject One: {student.Subject_one}</p>
                    <p>Subject Two: {student.Subject_Two}</p>
                    <p>Year/Semester: {student.Year_sem}</p>
                </div>
            )}
        </div>
    );
}

export default SearchStudent;
