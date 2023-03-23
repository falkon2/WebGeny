import './App.css';
// import {Link} from "react-router-dom"
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function Application() {
  
  // const [invisible, setInvisible] = useState(false);
  const [currentContent, setCurrentContent] = useState("content1");

  // Switch statement to return the appropriate content based on the current state value
  const success = () => {
    toast.success('Redirecting to the downloads page...')
}
  

  const getContent = () => {
    switch (currentContent) {
      case "content1":
        return (
          
          <div className="text-white font-poppins">
          <div
            id="index"
            className="index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
          >
            <div className="flex justify-center items-center">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                Web
              </h1>
              {/* <Typed
                className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-indigo-600"
                strings={["site Generator", "Geny"]}
                typeSpeed={70}
                backSpeed={100}
                loop
              /> */}
            </div>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4 ">
            A website builder that is focused on <a className="underline text-indigo-600">design</a> and 
              <a className="underline text-indigo-600"> simplicity</a>
            </p>
            <button onClick={() => setCurrentContent("content2")} className="bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-indigo-600 hover:bg-indigo-600  hover:shadow-xl hover:shadow-indigo-700 hover:text-white hover:scale-110">
              Download Now!
            </button>
          </div>
      </div>
      
        );
      case "content2":
        return (            <div className='font-poppins' >
        <h1 className='mt-10 mb-2 text-center capitalize text-transparent text-4xl bg-gradient-to-r from-indigo-600 to-indigo-900 font-extrabold bg-clip-text'>System</h1>'
        <hr className='w-1/5 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-900 '/>
        {/* my Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20 '>
          {/* 1st card */}
          <div className='py-10 text-white   hover:scale-110 transition-[0.5s] '>
            <div className=' overflow-hidden rounded-lg shadow-lg shadow-white bg-black  max-w-sm '>
              <img src="https://c4.wallpaperflare.com/wallpaper/461/319/628/computer-computers-2560x1440-mac-os-x-lion-wallpaper-preview.jpg" alt='mountain' className='w-full'/>
              <div className="px-6 py-4">
                <div className='font-bold text-xl mb-2 text-center'>
                  MacOS
                </div>
  
              </div>
              <div className='justify-center items-center flex '>
              <a href="https://drive.google.com/file/d/1wIRujHkihNA6-z8qGt_k3tozohbCPhtY/view?usp=sharing"><button onClick={success} className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                  Download
                </button></a>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className='py-10 text-white hover:scale-110 transition-[0.5s]'>
            <div className='rounded-lg overflow-hidden  shadow-lg shadow-blue-500 bg-blue-500 max-w-sm'>
              <img src="https://png.pngitem.com/pimgs/s/47-471523_windows-logo-google-discloses-actively-exploited-windows-microsoft.png" 
              alt='mountain' className='w-full'/>
              <div className="px-6 py-4">
                <div className='font-bold text-xl mb-2 text-center'>
                  Windows
                </div>
  
              </div>
              <div className='justify-center items-center flex '>
                <a href="https://drive.google.com/file/d/1JjMqdkkO3dpi5ZP0tQ7oSLjGXCCYXXVY/view?usp=sharing"><button onClick={success} className="bg-white  text-blue-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-blue-700 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700 hover:text-blue-200 hover:scale-110">
                  Download
                </button></a>
              </div>
            </div>
            
          </div>
          {/* 3rd card */}
          <div className='py-10 text-black hover:scale-110 transition-[0.5s]'>
            <div className='rounded-lg overflow-hidden shadow-lg max-w-sm shadow-white bg-white'>
              <img src="https://1000logos.net/wp-content/uploads/2017/03/Symbol-Linux.jpg" alt='mountain' className='w-full'/>
              <div className="px-6 py-4">
                <div className='font-bold text-xl mb-2 text-center'>
                  Linux
                </div>
              </div>
              <div className='justify-center items-center flex '>
              <a href="https://drive.google.com/drive/folders/1AqYDImkbqUQ4sjdD6LpsTR_H_IrQ2Sit?usp=sharing"><button onClick={success}  className="bg-black  text-white w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black hover:shadow-xl hover:shadow-black hover:text-white hover:scale-110" >
                  Download
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>);
      case "content3":
        return <div>Content 3</div>;
      default:
        return <div>No content found</div>;
    }
  };
  const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    
  return (
<div className="flex sticky z-10 justify-between items-center h-20 max-w-full mx-auto px-4 text-white font-poppins  top-0">
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="none"
        className="w-9"
      />
      <ul className="hidden  md:flex">
        <button className="active">
          <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600 '>
            Home
          </li>
            
        </button>
        <button className='notactive' onClick={getContent()}>
          <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600 '>
            About
          </li>
          
        </button>
        <a href="https://www.youtube.com/watch?v=68gU9V2xWRg&ab_channel=CodeCommerce">
          <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[35px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600 '>
            Host
          </li>
        </a>
        <a href="https://www.youtube.com/watch?v=ysEN5RaKOlA&ab_channel=CoderCoder">
          <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[55px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600'>
            Tutorial
          </li>
        </a>
      </ul>

      <div onClick={toggle} className="block md:hidden">
        {!isOpen ? <AiOutlineClose size={20} /> : <GiHamburgerMenu size={20} />}
      </div>

      <div
        className={
          !isOpen
            ? "fixed left-0 top-1 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="none"
          className="w-9 left-0"
        />
        <ul className="uppercase p-4">
          <NavLink to="/" activeClassName="active">
            <li className="p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <li className="p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out">
              About
            </li>
          </NavLink>
          <a href="https://www.youtube.com/watch?v=68gU9V2xWRg&ab_channel=CodeCommerce">
            <li className="p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out">
              Host
            </li>
          </a>
          <a href="https://www.youtube.com/watch?v=ysEN5RaKOlA&ab_channel=CoderCoder">
            <li className="p-4 hover:border-b hover:border-white hover:transition-[0.5s] hover:ease-in-out">
              Tutorial
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}


  return(    <div>
  {NavBar()}
  {getContent()}
</div>
    
);
}

