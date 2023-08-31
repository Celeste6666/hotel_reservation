"use client";
import Image from "next/image";
import fakeImage from "@/assets/10.jpg";

const Recommend = () => {
  return (
    <section className="home-container">
      <div className="home-inner-container flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center">精選住宿</h2>
          <p className="w-25 text-slate-500">優質住宿給您最好的享受</p>
        </div>

        <div className="home-card-group">
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-warning text-white">南竿</span>
                <span className="badge badge-info text-white mx-2">雙人房</span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-primary text-white">南竿</span>
                <span className="badge badge-warning text-white mx-2">
                  雙人房
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-primary text-white">南竿</span>
                <span className="badge badge-warning text-white mx-2">
                  雙人房
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-primary text-white">南竿</span>
                <span className="badge badge-warning text-white mx-2">
                  雙人房
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-primary text-white">南竿</span>
                <span className="badge badge-warning text-white mx-2">
                  雙人房
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
          <div className="card rounded bg-base-100 shadow-xl">
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-primary text-white">南竿</span>
                <span className="badge badge-warning text-white mx-2">
                  雙人房
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.1355
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">
                豪華雙人房
                {/* <div className="badge badge-primary">Remarks</div> */}
              </h3>
              <p className="text-slate-500">觀賞夕陽的絕美位置</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                2 Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                1 Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                3 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary rounded-full mt-20 px-10 text-white self-center">
          看全部
        </button>
      </div>
    </section>
  );
};

export default Recommend;
