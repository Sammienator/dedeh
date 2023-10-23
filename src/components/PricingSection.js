import React from 'react';
import { FaStar } from 'react-icons/fa';

import dedeeh  from "../assets/dedeeh.jpeg";
import dedeeeh from "../assets/dedeeeh.jpeg";
import gal55 from "../assets/gal55.png";


const pricingData = [
  {
    title: 'T-shirts',
    image: dedeeeh,
    price: '2099/=',
    rating: 4.5,
  },
  {
    title: 'Hoodies',
    image: dedeeh,
    price: '3299/=',
    rating: 4.8,
  },
  {
    title: 'Trousers',
    image: gal55,
    price: '2450/=',
    rating: 4.2,
  },
];

const PricingSection = () => {
  return (

    <>
<section className='bg-black text-white'>

<div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="2000" className='container'>
<h1 className='text-center  pt-24  text-5xl'> Trending Fashion</h1>
     <p className='text-center text-lg w-half p-2  mt-12 mb-12'> Discover the hottest trends in fashion that are setting the style scene on fire! Our curated collection of must-have pieces and style insights will keep you ahead of the fashion curve. From bold and vibrant colors to timeless classics, we've got it all.   Explore our collection today and upgrade your style quotient with the trendiest fashion pieces that are making waves right now. </p>

 </div>

    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-10">
        
      {pricingData.map((item, index) => (
        <div

        data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="2000"

          key={index}
          className="max-w-md w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 m-4 text-center"
        >
          <img src={item.image} alt={item.title} className="w-full mx-auto mb-4" />
          <h2 className="text-lg text-black font-bold mb-2"> {item.title} </h2>
          <p className="text-black text-base mb-2">KSHS: {item.price} </p>
          <div className="flex items-center justify-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-700">{item.rating} </span>
          </div>
        </div>
      ))}
    </div>

      
</section>
    </>
    
  );
};

export default PricingSection;
