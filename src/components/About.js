import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {

  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever the component re-renders
  }, []);

  return (
    <>
     
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="2000" class="sm:text-4xl text-3xl font-medium title-font mb-4 text-black"> About Ringa & Cloud Galaxy.</h1>

      <p data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="2500" class="lg:w-2/3 mx-auto text-base">The expectation is that this video will be unique and exciting, bringing together fans from all sides. This is a significant step for the artist, Cloud Galaxy in his music career and journey, and it signifies the great success that is to come. Kwenye mwezi wa Oktoba, msanii atashusha video mpya ya muziki. Msanii huyu amejitambulisha kwa jina jipya- "Cloud Galaxy", na atashirikisha muziki wa kipekee ambao utavutia mashabiki.</p>


      
      <p data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="2500" class="lg:w-2/3 mx-auto  text-base bold italic">
      RINGA, Ni video kubwa ya muziki inayojumuisha sanaa ya juu na ubunifu wa hali ya juu kwa kusawazisha muziki na maonyesho ya kuona. Cloud Galaxy anachukua hadithi ya muziki na kuifanya kuwa ya kipekee kwa kuonyesha picha zilizopangiliwa vizuri, mbinu za kamera za kuvutia, mwangaza wa kupendeza, na mazingira yanayovutia.
     </p>

     

    </div>
    <div   class="flex flex-wrap justify-center  text-center ">
      <div  class="p-4 md:w-1/4 sm:w-1/2 w-full ">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-white hover:shadow-xl">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Streams and Downloads.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-white hover:shadow-xl">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Social Media Followers.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-white hover:shadow-xl">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
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