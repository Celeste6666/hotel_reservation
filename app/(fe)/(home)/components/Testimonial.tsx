"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SparklesIcon } from "@heroicons/react/24/solid";

// Import Swiper styles
import "swiper/css";

// import "swiper/css/pagination";

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
          <SwiperSlide>
            <div className="card relative bg-base-100 shadow-xl shadow-zinc-200 flex flex-col items-center py-10 px-20">
              <div className="absolute top-10 right-10">
                <SparklesIcon className="w-24 h-24 text-primary" />
              </div>
              <figure className="flex flex-col">
                <div className="avatar">
                  <div className="w-24 mask mask-squircle">
                    <Image
                      src={`https://randomuser.me/api/portraits/lego/${Math.round(
                        Math.random() * 10
                      )}.jpg`}
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
                <h2 className="card-title mt-5">Celeste Kuo</h2>
                <small className="text-slate-500">前端工程師</small>
              </figure>
              <div className="card-bod pt-5 items-center text-center overflow-hidden">
                <p className="text-slate-500 line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card relative bg-base-100 shadow-xl shadow-zinc-200 flex flex-col items-center py-10 px-20">
              <div className="absolute top-10 right-10">
                <SparklesIcon className="w-24 h-24 text-primary" />
              </div>
              <figure className="flex flex-col">
                <div className="avatar">
                  <div className="w-24 mask mask-squircle">
                    <Image
                      src={`https://randomuser.me/api/portraits/lego/${Math.round(
                        Math.random() * 10
                      )}.jpg`}
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
                <h2 className="card-title mt-5">Celeste Kuo</h2>
                <small className="text-slate-500">前端工程師</small>
              </figure>
              <div className="card-bod pt-5 items-center text-center overflow-hidden">
                <p className="text-slate-500 line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card relative bg-base-100 shadow-xl shadow-zinc-200 flex flex-col items-center py-10 px-20">
              <div className="absolute top-10 right-10">
                <SparklesIcon className="w-24 h-24 text-primary" />
              </div>
              <figure className="flex flex-col">
                <div className="avatar">
                  <div className="w-24 mask mask-squircle">
                    <Image
                      src={`https://randomuser.me/api/portraits/lego/${Math.round(
                        Math.random() * 10
                      )}.jpg`}
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
                <h2 className="card-title mt-5">Celeste Kuo</h2>
                <small className="text-slate-500">前端工程師</small>
              </figure>
              <div className="card-bod pt-5 items-center text-center overflow-hidden">
                <p className="text-slate-500 line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.dolore obcaecati quod eaque, quibusdam asperiores
                  debitis.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
