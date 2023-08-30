import House from "@/icons/House";
import Chatting from "@ICON/Chatting";
import Car from "@ICON/Car";
import Ship from "@ICON/Ship";

const Service = () => {
  return (
    <div className="home-container flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center">我們提供的服務</h2>
        <p className="w-25 text-slate-500">快速便捷的預定系統</p>
      </div>
      <div className="home-card-group gap-20 lg:grid-cols-4 lg:gap-5">
        <div className="p-8 flex flex-col items-center justify-between hover:bg-zinc-50 hover:rounded-2xl hover:shadow-lg">
          <House className="w-44 h-32 text-primary" />
          <h3 className="mt-6 mb-3">民宿預定</h3>
          <span className="text-slate-500 text-center">
            嚴格審查民宿資格，提供優質住宿品質。
          </span>
        </div>
        <div className="p-8 flex flex-col items-center justify-between hover:bg-zinc-50 hover:rounded-2xl hover:shadow-lg">
          <Chatting className="w-44 h-32 text-primary" />
          <h3 className="mt-6 mb-3">即時回復</h3>
          <span className="text-slate-500 text-center">
            解決預定、旅行中遇到任何問題。
          </span>
        </div>
        <div className="p-8 flex flex-col items-center justify-between hover:bg-zinc-50 hover:rounded-2xl hover:shadow-lg">
          <Ship className="w-44 h-32 text-primary" />
          <h3 className="mt-6 mb-3">船票預定</h3>
          <span className="text-slate-500 text-center">
            提供預定出發時間，我們幫您暢通各島。
          </span>
        </div>
        <div className="p-8 flex flex-col items-center justify-between hover:bg-zinc-50 hover:rounded-2xl hover:shadow-lg">
          <Car className="w-44 h-32 text-primary" />
          <h3 className="mt-6 mb-3">租車服務</h3>
          <span className="text-slate-500 text-center">
            透過本公司預定，可享汽機車租車優惠。
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
