import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import heroImage from '../assets/hero-image.jpg.png'; 


const HeroSection = () => {
  return (
    <main className="container mx-auto">
      <div className="bg-white relative w-full h-59 rounded shadow overflow-hidden mb-6">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}><img src={heroImage} alt={`Slide ${index + 1}`} className="w-full h-full object-cover max-h-96" /></SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl font-bold">BEML</h1>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
