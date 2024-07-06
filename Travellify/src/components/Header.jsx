import React, { useContext, useState } from 'react';
import Logo from '../assets/React.png';
import { AuthContext } from '../context/auth';
import { NavLink } from 'react-router-dom';

function Header() {
  const authContext = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HandlerLogOut = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-900 py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={Logo} alt='ReactLogo' className='w-16 md:w-20 lg:w-24 xl:w-28' />
            <NavLink to='/home' className='text-white text-lg md:text-lg lg:text-xl xl:text-xl ml-2 md:ml-4 hover:text-sky-500'>
              {!authContext.check ? '' : 'HOME'}
            </NavLink>
          </div>
          <div className='flex items-center md:hidden'>
            <button className='text-white' onClick={toggleMenu}>
              <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
          <div className='hidden md:flex gap-x-5 items-center'>
            {authContext.check ? (
              <button onClick={HandlerLogOut} className='text-white hover:text-blue-400'>LOGOUT</button>
            ) : (
              <span className='text-white'>LOGIN</span>
            )}
            <div className='flex gap-4'>
              <a href='#' className='text-white hover:text-blue-500'>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href='#' className='text-white hover:text-pink-700'>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col gap-4 mt-4'>
            <NavLink to='/home' className='text-white hover:text-blue-400'>Home</NavLink>
            {authContext.check ? (
              <button onClick={HandlerLogOut} className='text-white hover:text-blue-400'>Log Out</button>
            ) : (
              <span className='text-white'>LOGIN</span>
            )}
            <div className='flex gap-4'>
              <a href='#' className='text-white hover:text-blue-500'>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href='#' className='text-white hover:text-pink-700'>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
