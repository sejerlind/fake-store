"use client";

import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}


const Slider  = () => {
  const [data, setData] = useState<Slide[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=3`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full">
      <div className="h-screen">
        <ul className=" h-4/5 w-full p-5">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className=" h-full"
          >
            {data.map(({ id, image, description, title }) => (
              <SwiperSlide key={id} className="p-20">
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {description && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {description}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                      {title}
                    </p>
        
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
