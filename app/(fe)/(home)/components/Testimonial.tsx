"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="home-container">
      <div className="home-inner-container">
        <div className="flex flex-col items-center justify-center">
          <h2>網友評價</h2>
          <p className="w-25 text-slate-500">五星好評，物超所值</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={true}
          modules={[Pagination]}
          className="mt-10 overflow-clip"
          style={{
            padding: "0 0 100px",
          }}
        >
          <SwiperSlide className="bg-red-400">
            <div className="w-1/2 h-96">Slide1</div>
          </SwiperSlide>
          <SwiperSlide className=" bg-blue-400">
            <div className="w-1/2 h-96">Slide1</div>
          </SwiperSlide>
          <SwiperSlide className=" bg-green-400">Slide 3</SwiperSlide>
          <SwiperSlide className=" bg-orange-400">Slide 4</SwiperSlide>
          <SwiperSlide className=" bg-red-400">Slide 5</SwiperSlide>
          <SwiperSlide className=" bg-red-400">Slide 6</SwiperSlide>
          <SwiperSlide className=" bg-red-400">Slide 7</SwiperSlide>
          <SwiperSlide className=" bg-red-400">Slide 8</SwiperSlide>
          <SwiperSlide className=" bg-red-400">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
