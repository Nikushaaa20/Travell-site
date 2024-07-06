import React from 'react'

function Footer() {
  return (
    <div className="h-24 md:mt-10 sm:mt-4 lg:mt-10 ">
   
    <div className="footer-media-container container mx-auto md:mt-10 sm:mt-4 lg:mt-10">
        <div className="footer-media-inner flex justify-between items-center md:mt-10 sm:mt-4 lg:mt-10">
        
        <div className="text-center md:text-left">
            <h3 className="text-gray-500">2024, All Rights Reserved ეს რა ფორმალობაა</h3>
        </div>
        <div className="flex justify-center md:justify-start gap-x-4">
            <a href="#" className="hover:text-blue-600">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-sky-300">
                <i className="fa-brands fa-twitter"></i>
            </a>
            
        </div>
        </div>
    </div>
</div>

  )
}

export default Footer