import React from 'react';
import Login from '../pages/Login';
import ImgMain from '../assets/developer.png';

function LoginSec() {
    return (
        <div className='bg-gray-100 py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='w-full md:w-1/2 mr-0 md:mr-8'>
                        <Login />
                    </div>
                    <div className='mt-8 md:mt-0 w-full md:w-1/2 flex justify-center'>
                        <img src={ImgMain} alt='Developer' className='hidden md:block w-full max-w-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSec;
