"use client";
import Image from "next/image";
import fakeImage from "@/assets/Photo by Michael Kroul on Unsplash.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

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
      <div className="flex flex-col items-center justify-center">
        <h2>區域選擇</h2>
        <p className="w-25 text-slate-500">多種小島風情供您挑選</p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="group card rounded w-96 bg-base-100 shadow-md hover:bg-secondary">
        <figure>
            <Image
              src={fakeImage}
              alt="Shoes"
              className="w-full h-full"
            />
          </figure>
          <div className="card-body transition duration-300 ease-in-out group-hover:text-white hover:border-0">
            <h2 className="card-title text-3xl">南竿</h2>
            <p>全台最美馬祖廟</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-circle
              btn-outline
              bg-secondary
              text-white
              group-hover:bg-white
              group-hover:text-secondary
              hover:bg-secondary
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
