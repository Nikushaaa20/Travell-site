import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'










function Posts() {

    const [info, setInfo] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    
    const p = ' ბატონო დავით ამაზე მერჯინს ვერ ვადებ '

    const handlePostClick = (postId) => {
        const selected = info.find(post => post.id === postId);
        setSelectedPost(selected);
    };
    const handleCloseModal = () => {
        setSelectedPost(null); 
    };

    useEffect(() => {
        axios.get('https://api.npoint.io/44c1c313d40c0811ad19')
        .then(response => {
            setInfo(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
   
   
  return (
    <section className="w-full flex flex-col items-center mt-20 ">
    <h2 className="text-2xl text-gray-600 mb-4 font-semibold">Our Posts</h2>
    <div className="divider bg-sky-400 h-1 rounded-md w-10/12 sm:w-full"></div>
    <div className="w-full sm:w-3/4 lg:w-1/2 mt-8">
        <p className="font-space-2">{p}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-20 w-full">
        {info.slice(0, 3).map((value) => (
            <div key={value.id} onClick={() => handlePostClick(value.id)}>
                <article className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    <img className="w-full h-64 object-cover object-center" src={value.image} alt="Post Image" />
                    <div className="p-4">
                        <h2 className="text-gray-900 text-lg font-semibold mb-2">{value.title.slice(0, 25)}</h2>
                        <p className="text-gray-600">{value.description.slice(0, 90)}</p>
                    </div>
                </article>
            </div>
        ))}
    </div>
    {selectedPost && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
           <div className="bg-white p-8 rounded-lg shadow-md w-96 h-96 text-center">
               <button className="absolute top-4 right-4" onClick={handleCloseModal}>
                   <i className="fa-regular fa-rectangle-xmark text-2xl text-gray-900 hover:text-pink-400"></i>
               </button>
               <article className="selected-post ">
                   <img className="w-full h-94 object-cover object-center" src={selectedPost.image} alt="Post Image" />
                   <div className="p-4 overflow-hidden">
                        <h2 className="text-gray-900 text-lg font-semibold mb-2">{selectedPost.title.slice(0, 25)}</h2>
                        <p className="text-gray-600 overflow-hidden">{selectedPost.description.slice(0, 90)}</p>
                    </div>
               </article>
               <NavLink 
                   to={`/Singlepost/${selectedPost.id}`} 
                   className='mt-16 font-bold text-xl text-pink-400 hover:text-sky-400 block'>
                   Learn More
               </NavLink>
           </div>
       </div>
    )}
</section>



  )
}

export default Posts