import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform login logic here
    if (username === 'admin' && password === 'password') {
      // Login successful, redirect to dashboard
      navigate('/dashboard', { state: { username, password } });
    } else {
      setError('Invalid username or password');
    }
  };

    return (
        <>
            <div className="w-full h-[70vh] flex justify-center items-center bg-gray-100 shadow-sm">
                <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
                    <h2 className="text-3xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">
                            <span className="text-gray-700">Username</span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your username"
                            />
                        </label>
                        <label className="block mb-2">
                            <span className="text-gray-700">Password</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                        </label>
                        {error && (
                            <div className="text-red-500 text-sm mb-2">{error}</div>
                        )}
                        <button
                            type="submit"
                            className="bg-[#323D66] text-[#FFF] py-2 px-20 rounded-md flex items-center justify-center gap-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Login