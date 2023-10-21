import React, { useEffect } from 'react';
import AOS from 'aos';
import dede4 from "../assets/dede4.jpg"

const Hero = () => {

   useEffect(() => {
      AOS.refresh(); // Refresh AOS whenever the component re-renders
    }, []);
  return (
    <>
    


<div id='home' class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div data-aos="zoom-out-down"data-aos-easing="linear"
     data-aos-duration="2000" class="md:w-1/2 max-w-md flex flex-col justify-center">
         <h1 class="md:text-4xl text-2xl italic  uppercase font-black">Stream My Album  -  DEDEHCATION!!!</h1>
         <p id='para' class="text-xl  mt-4"><b> "Utapata mchanganyiko wa sauti tamu, muziki wa kuvutia na picha zenye nguvu. <br/> Jiandae kusafiri katika ulimwengu wa muziki wenye kuburudisha na kusisimua!" </b> </p>
         <div class="my-5 h-16">
            <button class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-[#191970] hover:bg-yellow-500 rounded text-lg text-center ml-20 w-48">Join us now</button>
         </div>
      </div>
      <div data-aos="zoom-out-up" data-aos-easing="linear"
     data-aos-duration="2500" class="flex md:justify-end w-full md:w-1/2 -mt-5">
         <div class="bg-dots">
            <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
               <img alt="img" class="rounded" src={dede4}/> 
               <p class="text-2xl p-10 bg-white"> "Najitahidi kuwapa burudani, mziki wa kweli na mafundisho mema!" - Dedeh 254. </p>
            </div>
         </div>
      </div>
   </div>
</div>
    
    </>
  );
};

export default Hero;