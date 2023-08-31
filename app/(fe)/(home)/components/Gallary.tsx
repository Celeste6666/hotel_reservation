import Image from "next/image";
import Apng from "@/assets/13.jpg";
import Bpng from "@/assets/15.jpg";
import Cpng from "@/assets/18.jpg";
import Dpng from "@/assets/19.jpg";
import Epng from "@/assets/20.jpg";

type Props = {};

const Gallary = (props: Props) => {
  return (
    <section className="home-container">
      <div className="home-inner-container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center">旅行記憶</h2>
          <p className="w-25 text-slate-500">快樂的回憶永不消失</p>
        </div>
        <div className="mt-5 flex flex-wrap justify-between h-full">
          <figure className="w-full lg:w-[32.5%] h-full rounded-tl-lg">
            <Image
              src={Apng}
              alt="A"
              className="h-[720px] object-cover rounded-tl-3xl rounded-br-3xl mt-5"
            />
          </figure>
          <figure className="w-full md:w-[48%] lg:w-[32.5%]">
            <Image
              src={Bpng}
              alt="A"
              className="w-full h-[400px] object-cover rounded-tl-3xl rounded-br-3xl mt-5"
            />
            <Image
              src={Cpng}
              alt="A"
              className="w-full h-[300px] object-cover rounded-tl-3xl rounded-br-3xl mt-5"
            />
          </figure>
          <figure className="w-full md:w-[48%] lg:w-[32.5%]">
            <Image
              src={Dpng}
              alt="A"
              className="w-full h-[300px] object-cover rounded-tl-3xl rounded-br-3xl mt-5"
            />
            <Image
              src={Epng}
              alt="A"
              className="w-full h-[400px] object-cover rounded-tl-3xl rounded-br-3xl mt-5"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
