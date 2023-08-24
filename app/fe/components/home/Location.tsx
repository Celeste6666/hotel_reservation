"use client";
import Image from "next/image";
import fakeImage from "@/assets/Photo by Michael Kroul on Unsplash.jpg";

interface ILocation {
  id: number;
  name: string;
  remarks: string;
  description: string;
  photos: [string, string]; // 用來限制圖片數量
}

const Location = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      

    </div>
  );
};

export default Location;
