import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';





function SinglePost() {
  const [currentPost, setCurrentPost] = useState({});
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://api.npoint.io/44c1c313d40c0811ad19/${id}`)
    .then(response => {
      setCurrentPost(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}, [id])  

  return (
<>
      <Header/>

    <div className="bg-gray-900 flex justify-center items-center">
    <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-64 object-cover object-center" src={currentPost.image} alt="Post Image" />
                <div className="p-4">
                    <h2 className="text-gray-900 text-lg font-semibold mb-2">{currentPost.title}</h2>
                    <p className="text-gray-600">{currentPost.description}</p>
                </div>
            </div>
           
        </div>
    </div>
</div>


    <Footer />
</>



  )
}

export default SinglePost