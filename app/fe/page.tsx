import Image from "next/image";
import Banner from "@/assets/Photo by Shifaaz shamoon on Unsplash.jpg";
import Location from "@FE/components/home/Location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-4/5 relative flex justify-center items-center">
        <Image src={Banner} alt="Sea" fill />
        <div className="absolute p-5 rounded-lg bg-opacity-80 bg-white">
          <small className="text-secondary text-lg">歡迎來到馬祖</small>
          <h1 className="text-5xl font-bold">最豐富的馬祖民宿搜尋網</h1>
        </div>
      </div>
      <div className="px-16">
        <Location />
      </div>
    </main>
  );
}
