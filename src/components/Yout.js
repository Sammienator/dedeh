import React from 'react';
import {  FaYoutube } from 'react-icons/fa';

const YouTubeVideoComponent = () => {


  return (
    <div id='yout' className="flex flex-col items-center mb-10">

<h1 data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="2000" class="sm:text-4xl text-3xl font-medium title-font mb-4 text-black"> Stream my Music. </h1>
     
      <iframe  className="justify-center p-4  m-4" width="560" height="315" src="https://www.youtube.com/embed/B6KkT4jfmAA?si=3SPnYPsnyE09rxsi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
      <div className="mt-4 text-center mb-6">
        <h3 className="text-2xl font-bold">Tabasamu Music Video.</h3>
        <p className="text-gray-600 text-xl">Watch and stream my music below!</p>
      </div>

      {/* icons */}


      <div className="flex flex-col items-center ">
      <div className="flex items-center mb-4">
        <a
          href="https://youtu.be/iTLvsTNQhms?si=deFzH7fVjzvCoYmA"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-8 flex flex-col items-center"
        >
          <FaYoutube size={48} className="mb-2 text-[#FF0000] " />
          <span className="text-sm italic">"IWEKE"</span>
        </a>
        <a
          href="https://youtu.be/z8srJpwPi8o?si=boFhgsL13Kv-DHQR"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-8 flex flex-col items-center"
        >
          <FaYoutube size={48} className="mb-2 text-[#FF0000] " />
          <span className="text-sm italic">"Tekete."</span>
        </a>
        <a
          href="https://youtu.be/MiKzsuqD0lc?si=hCXzVhwxHj7pO9sl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <FaYoutube size={48} className="mb-2 text-[#FF0000] " />
          <span className="text-sm italic">"NAKUJA."</span>
        </a>
      </div>
    </div>




    </div>
  );
};

export default YouTubeVideoComponent;
