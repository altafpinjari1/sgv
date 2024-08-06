import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Result() {
    const [enrollment, setEnrollment] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/search?enrollNo=${enrollment}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Log the search data to the console

                if (data.length > 0) {
                    // Redirect to Marksheet page with state
                    navigate('/marksheet', { state: { student: data[0] } });
                } else {
                    setError('Enrollment number not found');
                }
            } else if (response.status === 404) {
                setError('Student not found');
            } else {
                setError('An error occurred');
            }
        } catch (error) {
            console.error('An error occurred:', error); // Log any errors that occur
            setError('An error occurred');
        }
    };

    return (
        <>
            <section className='w-full h-[80vh] flex justify-center items-center'>
                <div className='w-5/12 shadow-sm rounded border-2'>
                    <h4 className='w-full bg-[#323D66] py-4 px-2 text-xl text-white'>Download Result</h4>
                    <form className='w-6/12 m-auto h-[24vh] py-10' onSubmit={handleSubmit}>
                        <div className="block mb-2">
                            <input
                                type="text"
                                value={enrollment}
                                onChange={(e) => setEnrollment(e.target.value)}
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter enrollment number"
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm mb-2">{error}</div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="bg-[#323D66] text-[#FFF] py-2 px-10 rounded-md flex items-center justify-center gap-2"
                            >
                                Show Result
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Result;
