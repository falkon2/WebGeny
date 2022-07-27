import React from 'react'
import { toast } from 'react-hot-toast'
export const Downloads = () => {
    const ComingSoon = () => {
        toast.error('Coming Soon!')
    }
    return(
            <div className='font-poppins' >
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
                      <button onClick={ComingSoon} className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                        Coming soon...
                      </button>
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
                      <a href="https://drive.google.com/file/d/1BaFqnnbF157_m7KkBVG-py7nlh2NC1Fw/view?usp=sharing"><button  className="bg-white  text-blue-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-blue-700 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700 hover:text-blue-200 hover:scale-110">
                        Download
                      </button></a>
                    </div>
                  </div>
                  
                </div>
                {/* 3rd card */}
                <div className='py-10 text-black hover:scale-110 transition-[0.5s]'>
                  <div className='rounded-lg overflow-hidden shadow-lg max-w-sm shadow-white bg-white'>
                    <img src="http://logo-logos.com/2017/07/Linux_Logo_01.jpg" alt='mountain' className='w-full'/>
                    <div className="px-6 py-4">
                      <div className='font-bold text-xl mb-2 text-center'>
                        Linux
                      </div>
        
                    </div>
                    <div className='justify-center items-center flex '>
                      <button onClick={ComingSoon}  className="bg-black  text-white w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black hover:shadow-xl hover:shadow-black hover:text-white hover:scale-110" >
                        Coming soon...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
