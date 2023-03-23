import './App.css';
// import {Link} from "react-router-dom"
import { useState } from 'react';

export default function Application() {

  // const [invisible, setInvisible] = useState(false);
  const [currentContent, setCurrentContent] = useState("content1");

  // Switch statement to return the appropriate content based on the current state value
  
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
        return <div>Content 2</div>;
      case "content3":
        return <div>Content 3</div>;
      default:
        return <div>No content found</div>;
    }
  };

  return(    <div>

  {getContent()}
</div>
    
);
}


