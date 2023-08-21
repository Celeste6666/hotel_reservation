import Image from "next/image";
import fakeImage from "@/assets/Photo by Michael Kroul on Unsplash.jpg";

const Location = () => {
  return (
    <div className="grid gap-4 grid-cols-5 grid-rows-1 my-20">
      <div className="group card w-full card-compact bg-base-100 shadow-xl justify-center items-center">
        <figure className="rounded-lg">
          <Image src={fakeImage} alt="Sea" />
        </figure>
        <div className="card-body opacity-0 group-hover:opacity-100 text-white absolute z-10">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="group card w-full shadow-xl justify-center items-center">
        <figure className="rounded-lg">
          <Image src={fakeImage} alt="Sea" />
        </figure>
        <div className="card-body opacity-0 group-hover:opacity-100 text-white  absolute z-10">
          <h2 className="card-title text-4xl">南竿</h2>
          <p>全台最美馬祖廟</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">前往</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
