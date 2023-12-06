"use client"

import Image from 'next/image'


function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
      <div className="p-5 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-3xl font-bold">
            Welcome to Saida Medical Supplies <br />

            <br />
            Diving deep into Everything you need to know to know about medical Equipments.
          </h1>

          <p>
            Enhance your personal stoarge with getArrays, offering a simple
            and
            efficient way to upload, organize, and access files from 
            anywhere.
            Securely store important documents and media, and experience
            convinience of easy file management and sharing in one
              centralized
              solution.
          </p>

      </div>

      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
         <video autoPlay loop muted className="rounded-lg">
          <source 
            src="/latan.mp4"
            type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>
    </div>

  )
}

export default Banner