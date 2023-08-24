import Image from "next/image";
import Banner from "@/assets/banner.jpg";
import Location from "@FE/components/home/Location";
import Recommend from "@FE/components/home/Recommend";
import ArrowRightCircle from "@ICON/ArrowRightCircle";

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
        <div className="absolute rounded-lg p-12 text-white ms-8 bg-zinc-900 bg-opacity-60">
          <h1 className="text-5xl font-bold leading-normal">還在尋找嗎？</h1>
          <h1 className="text-5xl font-bold leading-normal">
            最優質的<span className="text-secondary">馬祖民宿搜尋網</span>
          </h1>
          <a className="btn btn-secondary text-white btn-wide text-2xl flex flex-row justify-center">
            找民宿
            <ArrowRightCircle className="w-8 h-8 arrowMove" />
          </a>
        </div>
      </div>
      <div className="container">
        <Recommend list={[]} />
        <Location />
      </div>
    </main>
  );
}
