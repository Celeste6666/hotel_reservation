"use client";
import Image from "next/image";
import fakeImage from "@/assets/10.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Hotel = {
  id: number;
  name: string;
  price: number;
  description: string;
  [prop: string]: any;
};

type Props = {
  list: Array<Hotel>; // IHotel[] 是相同的意思表示
};

const Recommend = ({ list }: Props) => {
  return (
    <div className="home-container">
      <div className="flex flex-col items-center justify-center">
        <h2>區域選擇</h2>
        <p className="w-25 text-slate-500">多種小島風情供您挑選</p>
      </div>
      <div className="home-card-group">
        <div className="group card rounded bg-base-100 shadow-md hover:bg-primary">
          <figure>
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body transition duration-300 ease-in-out group-hover:text-white hover:border-0">
            <h3 className="card-title text-2xl">南竿</h3>
            <p>全台最美馬祖廟</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-circle
              btn-outline
              bg-primary
              text-white
              group-hover:bg-white
              group-hover:text-primary
              hover:bg-primary
              hover:border-0"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
        <div className="group card rounded bg-base-100 shadow-md hover:bg-primary">
          <figure>
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body transition duration-300 ease-in-out group-hover:text-white hover:border-0">
            <h3 className="card-title text-2xl">南竿</h3>
            <p>全台最美馬祖廟</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-circle
              btn-outline
              bg-primary
              text-white
              group-hover:bg-white
              group-hover:text-primary
              hover:bg-primary
              hover:border-0"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
        <div className="group card rounded bg-base-100 shadow-md hover:bg-primary">
          <figure>
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body transition duration-300 ease-in-out group-hover:text-white hover:border-0">
            <h3 className="card-title text-2xl">南竿</h3>
            <p>全台最美馬祖廟</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-circle
              btn-outline
              bg-primary
              text-white
              group-hover:bg-white
              group-hover:text-primary
              hover:bg-primary
              hover:border-0"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
        <div className="group card rounded bg-base-100 shadow-md hover:bg-primary">
          <figure>
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
          </figure>
          <div className="card-body transition duration-300 ease-in-out group-hover:text-white hover:border-0">
            <h3 className="card-title text-2xl">南竿</h3>
            <p>全台最美馬祖廟</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-circle
              btn-outline
              bg-primary
              text-white
              group-hover:bg-white
              group-hover:text-primary
              hover:bg-primary
              hover:border-0"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
