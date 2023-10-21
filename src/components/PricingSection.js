import React from 'react';
import { FaStar } from 'react-icons/fa';

import gal1 from "../assets/gal1.png"
import gal5 from "../assets/gal5.png"
import gal3 from "../assets/gal3.png"


const pricingData = [
  {
    title: 'T-shirts',
    image: gal1,
    price: '2099/=',
    rating: 4.5,
  },
  {
    title: 'Hoodies',
    image: gal3,
    price: '3299/=',
    rating: 4.8,
  },
  {
    title: 'Trousers',
    image: gal5,
    price: '2450/=',
    rating: 4.2,
  },
];

const PricingSection = () => {
  return (

    <>

<div className='container'>
<h1 className='text-center  pt-24  text-5xl'> Trending Fashion</h1>
     <p className='text-center text-lg w-half  mt-12 mb-12'> Tunaalika watu kujitambulisha na mtindo wetu wa muziki kupitia mavazi yetu ya kipekee. <br/> Mashati yetu yameundwa kwa ubunifu na uangalifu wa kipekee, yakiwakilisha jina langu na kazi yangu ya muziki. 
     <br/> Kila ununuzi wa shati letu linasaidia kueneza muziki wetu na kukuza kipaji changu. </p>

 </div>

    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-10">
        
      {pricingData.map((item, index) => (
        <div
          key={index}
          className="max-w-md w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 m-4 text-center"
        >
          <img src={item.image} alt={item.title} className="w-full mx-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 text-base mb-2">KSHS: {item.price}</p>
          <div className="flex items-center justify-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-700">{item.rating}</span>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default PricingSection;
