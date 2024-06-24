import React from 'react'
export default function Footer() {
  return (
    <footer className='text-center h-[50px] w-full bg-gray-200 border-t-2 border-black text-black flex justify-around items-center' >
      <h1 className='text-xl font-bold max-ml:text-lg'>Develop By Anuj Tiwari</h1>
      <div className='w-1/3 flex justify-center items-center gap-5'>
      <a href="https://www.instagram.com/" target='_blank'><i className="ri-instagram-line text-4xl  max-ml:text-3xl " ></i></a>
      <a href="https://github.com/Anuj0918" target='_blank'><i className="ri-github-fill text-4xl  max-ml:text-3xl" ></i></a>
      <a href="https://www.linkedin.com/in/anuj-tiwari-3b148a245/" target='_blank'><i className="ri-linkedin-box-fill text-4xl max-ml:text-3xl " ></i></a>
      </div>
    </footer>
  )
}




