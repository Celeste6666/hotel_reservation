import Image from "next/image";
import { Room } from "@/types";
import fakeImage from "@/assets/10.jpg";

type Props = {
  list: Room[];
};

const Card = ({ list }: Props) => {
  return (
    <>
      {list.map(
        ({
          id,
          name,
          location,
          accommodationType,
          price,
          remarks,
          beds,
          baths,
          square,
          image,
        }) => (
          <div className="card rounded bg-base-100 shadow-xl hover:scale-105 transition duration-300" key={id}>
            <figure className="relative">
              <Image src={fakeImage} alt="Shoes" className="w-full h-full" />
              <div className="absolute top-3 left-4">
                <span className="badge badge-warning text-white">
                  {location}
                </span>
                <span className="badge badge-info text-white mx-2">
                  {accommodationType}
                </span>
              </div>
              <div className="absolute text-white bottom-3 left-4 text-3xl">
                NT.{price}
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-2xl">{name}</h3>
              <p className="text-slate-500">{remarks}</p>
            </div>
            <div className="card-actions gap-0 justify-around items-stretch border-t-2 ">
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                {beds} Beds
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                {baths} Bath
              </span>
              <span className="border-r-2 text-center text-base flex-1 py-1 w-100 flex items-center justify-center text-slate-500">
                {square} 坪
              </span>
              <div className="text-center py-1 flex-1 items-center">
                <div className="badge badge-primary text-white">Detail</div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Card;
