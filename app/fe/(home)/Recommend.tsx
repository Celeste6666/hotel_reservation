"use client";
import Image from "next/image";
import fakeImage from "@/assets/10.jpg";

const Recommend = () => {
  return (
    <div className="home-container flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center">精選住宿</h2>
        <p className="w-25 text-slate-500">優質住宿給您最好的享受</p>
      </div>

      <div className="home-card-group">
        <div className="card rounded bg-base-100 shadow-xl">
          <figure className="relative">
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
            <div className="absolute top-3 left-4 badge badge-secondary badge-lg text-xl py-3 text-white">
              南竿
            </div>
            <div className="absolute text-white bottom-3 left-4 text-3xl">
              NT.1355
            </div>
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl">
              豪華雙人房
              {/* <div className="badge badge-secondary">Remarks</div> */}
            </h3>
            <p className="text-slate-500">觀賞夕陽的絕美位置</p>
          </div>
          <div className="card-actions gap-0 justify-around border-t-2">
            <div className="border-r-2 text-center p-4 text-base flex-1">
              2 Beds
            </div>
            <div className="border-r-2 text-center p-4 text-base flex-1">
              1 Bath
            </div>
            <div className="border-r-2  text-center p-4 text-base flex-1">
              3 坪
            </div>
            <div className="text-center p-3 flex-1">
              <div className="badge badge-primary text-white badge-lg text-lg py-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl">
          <figure className="relative">
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
            <div className="absolute top-3 left-4 badge badge-secondary badge-lg text-xl py-3 text-white">
              南竿
            </div>
            <div className="absolute text-white bottom-3 left-4 text-3xl">
              NT.1355
            </div>
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl">
              豪華雙人房
              {/* <div className="badge badge-secondary">Remarks</div> */}
            </h3>
            <p className="text-slate-500">觀賞夕陽的絕美位置</p>
          </div>
          <div className="card-actions gap-0 justify-around border-t-2">
            <div className="border-r-2 text-center p-4 text-base flex-1">
              2 Beds
            </div>
            <div className="border-r-2 text-center p-4 text-base flex-1">
              1 Bath
            </div>
            <div className="border-r-2  text-center p-4 text-base flex-1">
              3 坪
            </div>
            <div className="text-center p-3 flex-1">
              <div className="badge badge-primary text-white badge-lg text-lg py-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl">
          <figure className="relative">
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
            <div className="absolute top-3 left-4 badge badge-secondary badge-lg text-xl py-3 text-white">
              南竿
            </div>
            <div className="absolute text-white bottom-3 left-4 text-3xl">
              NT.1355
            </div>
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl">
              豪華雙人房
              {/* <div className="badge badge-secondary">Remarks</div> */}
            </h3>
            <p className="text-slate-500">觀賞夕陽的絕美位置</p>
          </div>
          <div className="card-actions gap-0 justify-around border-t-2">
            <div className="border-r-2 text-center p-4 text-base flex-1">
              2 Beds
            </div>
            <div className="border-r-2 text-center p-4 text-base flex-1">
              1 Bath
            </div>
            <div className="border-r-2  text-center p-4 text-base flex-1">
              3 坪
            </div>
            <div className="text-center p-3 flex-1">
              <div className="badge badge-primary text-white badge-lg text-lg py-3">
                Detail
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl">
          <figure className="relative">
            <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
            <div className="absolute top-3 left-4 badge badge-secondary badge-lg text-xl py-3 text-white">
              南竿
            </div>
            <div className="absolute text-white bottom-3 left-4 text-3xl">
              NT.1355
            </div>
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl">
              豪華雙人房
              {/* <div className="badge badge-secondary">Remarks</div> */}
            </h3>
            <p className="text-slate-500">觀賞夕陽的絕美位置</p>
          </div>
          <div className="card-actions gap-0 justify-around border-t-2">
            <div className="border-r-2 text-center p-4 text-base flex-1">
              2 Beds
            </div>
            <div className="border-r-2 text-center p-4 text-base flex-1">
              1 Bath
            </div>
            <div className="border-r-2  text-center p-4 text-base flex-1">
              3 坪
            </div>
            <div className="text-center p-3 flex-1">
              <div className="badge badge-primary text-white badge-lg text-lg py-3">
                Detail
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary rounded-full mt-20 px-10 text-white self-center">
        看全部
      </button>
    </div>
  );
};

export default Recommend;
