import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import { AuthContext } from '../context/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const authContext = useContext(AuthContext)
  
  const [email, setEmail] = useState('')
  const [result, setResult] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setResult(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

    const handleChange = (e) => {
      setEmail(e.target.value)
    }
  const HandlerSubmit = (e) => {
    e.preventDefault();
    const user = result.find((user) => user.email === email);
    if (user) {
      authContext.setCheck(true);
      authContext.Login(email)
      navigate('/Home');
    } else {
      setError('შეყვანე რამე სიმონ!');
    }
  };


    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                <h2 className='text-2xl mb-4'>Login</h2>
                <form onSubmit={HandlerSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='emailInput' className='block text-sm font-semibold mb-1'>Email</label>
                        <input
                            type='text'
                            name='email'
                            id='emailInput'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-semibold mb-1'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-red-500'>{error}</h3>
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
}

export default Login;
