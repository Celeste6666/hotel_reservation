import Image from "next/image";
import Banner from "@ASSET/banner2.jpg";
import News from "@FE/(home)/components/News";
import Location from "@FE/(home)/components/Location";
import Recommend from "@FE/(home)/components/Recommend";
import Gallary from "@FE/(home)/components/Gallary";
import Service from "@FE/(home)/components/Service";
import Testimonial from "@FE/(home)/components/Testimonial";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="h-full relative z-0 flex justify-start items-center bg-white w-full">
        <figure className="h-[100vh] w-full">
          <Image
            src={Banner}
            alt="Sea"
            className="rounded-bl-[25%] w-full h-full object-cover"
          />
        </figure>
        <div
          className="absolute rounded-lg p-4 text-white ms-8 bg-zinc-900 bg-opacity-60 lg:p-12
        "
        >
          <h2>還在尋找嗎？</h2>
          <h2>
            最優質的<span className="text-primary">馬祖民宿搜尋網</span>
          </h2>
          <a className="btn btn-primary text-white mt-4 text-lg flex flex-row justify-center  lg:text-2xl lg:btn-wide">
            找民宿
            <ArrowRightCircleIcon className="w-8 h-8 arrowMove" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <News />
        <Location list={[]} />
        <Recommend />
        <Service />
        <Gallary />
        <Testimonial />
      </div>
    </main>
  );
}
