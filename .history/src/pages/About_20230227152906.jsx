import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
export const About = () => {
  return (
    <div>
    <div className="text-white font-poppins">
        <div
          className="index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
        >
          <div className="flex justify-center items-center">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Web
            </h1>
            <Typed
              className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-indigo-600"
              strings={["site Generator", "Geny"]}
              typeSpeed={70}
              backSpeed={100}
              loop
            />
          </div>
          <p className="md:text-2xl sm:text-xl text-lg font-bold py-4 ">
          Hello and thank you for visiting Web Geny, Here you can easily construct your own website that may be entirely personalised and is also completely free! This website builder is focused on <a className="underline text-indigo-600">design</a> and <a className="underline text-indigo-600"> simplicity</a>.</p>
          <p className='md:text-xl sm:text-lg text-base'> This website builder was made by <a href='https://github.com/falkon2' className="underline text-indigo-300 after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110">Falkon</a></p>
          <Link to="/"><button className="bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-indigo-600 hover:bg-indigo-600  hover:shadow-xl hover:shadow-indigo-700 hover:text-white hover:scale-110">
            Home
          </button></Link>
        </div>
    </div>

    </div>
  )
}
