import Image from "next/image";
import Banner from "@/assets/banner.jpg";
import Location from "@FE/components/home/Location";
import Recommend from "@FE/components/home/Recommend";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-4/5 relative flex justify-start items-center">
        <Image
          src={Banner}
          alt="Sea"
          width="0"
          height="0"
          sizes="100vw, 90vh"
        />
        <div
          className="absolute rounded-lg p-4 text-white ms-8 bg-zinc-900 bg-opacity-60 lg:p-12
        "
        >
          <h1>還在尋找嗎？</h1>
          <h1>
            最優質的<span className="text-secondary">馬祖民宿搜尋網</span>
          </h1>
          <a className="btn btn-secondary text-white mt-4 text-lg flex flex-row justify-center  lg:text-2xl lg:btn-wide">
            找民宿
            <ArrowRightCircleIcon className="w-8 h-8 arrowMove" />
          </a>
        </div>
      </div>
      <div className="container px-12  md:px-24 ">
        <Location list={[]} />
        <Recommend />
      </div>
    </main>
  );
}
