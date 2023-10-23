import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {

  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever the component re-renders
  }, []);

  return (
    <>
     
<section class=" bg-black text-white shadow-lg border body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="2000" class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white underline"> About Dedeh 254.</h1>

      <p data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="2500" class="lg:w-2/3 mx-auto text-base">In the world of music, I am more than just an artist - I am a storyteller. With the recent release of my album, I invite you to step into my world, to experience the highs and lows, the triumphs and tribulations, and the emotions that have brought me to this moment.</p>


      
      <p data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="2500" class="lg:w-2/3 mx-auto  text-base bold italic">
      My journey began in the heart of the Kisumu city, where the rhythm of life mirrored the beat of my heart. Growing up, I found solace in the lyrics of my favorite artists. The microphone became my confidant, and the stage my sanctuary. Over the years, I've poured my soul into my craft. Every lyric is a chapter in the story of my life, every beat a rhythm that echoes my journey.
      <hr/>
      <br/>  


     </p>
       <p class="lg:w-2/3 mx-auto bold ">

       <em> My latest album is more than just a collection of songs. It's a testament to the power of resilience, a reflection of the struggles and joys that have shaped me into the artist I am today. It's a window into my world, a world filled with passion, dedication, and an unwavering belief in the transformative power of music.  </em>
       </p>
     

    </div>
    <div 
     data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2500"
    class="flex flex-wrap justify-center  text-center ">
      <div  class="p-4 md:w-1/4 sm:w-1/2 w-full ">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
          <p class="leading-relaxed">Streams and Downloads.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
          <p class="leading-relaxed">Social Media Followers.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-white">74</h2>
          <p class="leading-relaxed">Audio and Music Videos.</p>
        </div>
      </div>
   
    </div>
  </div>
</section>
    </>
  );
};

export default About;