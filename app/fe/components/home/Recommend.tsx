'use client'
import Image from "next/image";
import fakeImage from "@/assets/Photo by Michael Kroul on Unsplash.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

interface IHotel {
  id: number;
  name: string;
  price: number;
  description: string;
  [prop: string]: any;
}

type Props = {
  list: Array<IHotel>; // IHotel[] 是相同的意思表示
};

const Recommend = ({ list }: Props) => {
  return (
    <div className="my-20">
      <h3 className="text-3xl">精選住宿</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{
          padding: "35px 0"
        }}
      >
        <SwiperSlide>      <div className="card w-full bg-base-100 shadow-md">
        <figure>
          <Image src={fakeImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">南竿</h2>
          <p>全台最美馬祖廟</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">前往</button>
          </div>
        </div>
      </div></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Recommend;
