import React from 'react'

export const Downloads = () => {
    return(
            <div className='font-poppins' >
              <h1 className='mt-10 mb-2 text-center capitalize text-transparent text-4xl bg-gradient-to-r from-indigo-600 to-indigo-900 font-extrabold bg-clip-text'>System</h1>'
              <hr className='w-1/5 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-900 '/>
              {/* my Cards */}
              <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20 '>
                {/* 1st card */}
                <div className='py-10 text-white   hover:scale-110 transition-[0.5s] '>
                  <div className=' overflow-hidden rounded-lg shadow-lg shadow-white bg-black  max-w-sm '>
                    <img src="https://png.pngitem.com/pimgs/s/47-471523_windows-logo-google-discloses-actively-exploited-windows-microsoft.png" alt='mountain' className='w-full'/>
                    <div className="px-6 py-4">
                      <div className='font-bold text-xl mb-2 text-center'>
                        Windows
                      </div>
        
                    </div>
                    <div className='justify-center items-center flex '>
                      <button  className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                {/* 2nd card */}
                <div className='py-10 text-white hover:scale-110 transition-[0.5s]'>
                  <div className='rounded-lg overflow-hidden  shadow-lg shadow-blue-500 bg-blue-500 max-w-sm'>
                    <img src="https://i.pinimg.com/originals/8d/fe/5f/8dfe5f9c1ef12e661df8a5283283ff03.jpg" 
                    alt='mountain' className='w-full'/>
                    <div className="px-6 py-4">
                      <div className='font-bold text-xl mb-2 text-center'>
                        MacOS
                      </div>
        
                    </div>
                    <div className='justify-center items-center flex '>
                      <button  className="bg-white  text-blue-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-blue-700 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700 hover:text-blue-200 hover:scale-110">
                        Download
                      </button>
                    </div>
                  </div>
                  
                </div>
                {/* 3rd card */}
                <div className='py-10 text-white hover:scale-110 transition-[0.5s]'>
                  <div className='rounded-lg overflow-hidden shadow-lg max-w-sm shadow-red-600 bg-red-600'>
                    <img src="https://cdn.discordapp.com/attachments/916242216211595264/1001730224574169208/Screenshot_20.png" alt='mountain' className='w-full'/>
                    <div className="px-6 py-4">
                      <div className='font-bold text-xl mb-2 text-center'>
                        Linux
                      </div>
        
                    </div>
                    <div className='justify-center items-center flex '>
                      <button  className="bg-white  text-red-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-red-800 hover:bg-red-800 hover:shadow-xl hover:shadow-red-800 hover:text-red-100 hover:scale-110" >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
