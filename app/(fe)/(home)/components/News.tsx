import Image from "next/image";
import Boat from "@ASSET/16.jpg";

type Props = {};

const News = (props: Props) => {
  return (
    <section className="home-container ps-0 pe-8 grid grid-cols-1 lg:grid-cols-2">
      <figure className="h-96 lg:h-[80vh]">
        <Image src={Boat} alt="boat" className="rounded-tr-[25%] h-full" />
      </figure>
      <div className="home-inner-container">
        <div className="flex flex-col pt-10 px-8">
          <h3>最新消息</h3>
          <ul className="list-disc leading-loose marker:text-2xl pl-6">
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
            <li>
              <span className="w-full flex justify-between">
                <span className="w-3/4 whitespace-nowrap text-ellipsis overflow-hidden">
                  北竿擺冥將於 2 月 10 日開始，請參加人員可先登記領取禮品。
                </span>
                <span className="w-1/4">2023-01-20</span>
              </span>
            </li>
          </ul>
          <button className="btn btn-primary self-end text-white mr-6 mt-10 hover:shadow-lg">
            查看更多消息
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
