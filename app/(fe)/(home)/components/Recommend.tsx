import Card from "@COM/(fe)/utils/Card";
import LinkButton from "@/components/(fe)/utils/link-button";

const Recommend = () => {
  const rooms = [
    {
      id: "1",
      location: "南竿",
      accommodationType: "雙人床",
      price: 1355,
      name: "豪華雙人床",
      remarks: "觀賞夕陽的絕美位置",
      beds: 2,
      baths: 1,
      square: 5,
      image: "string",
      hotel_name: "",
    },
    {
      id: "2",
      location: "南竿",
      accommodationType: "雙人床",
      price: 1355,
      name: "豪華雙人床",
      remarks: "觀賞夕陽的絕美位置",
      beds: 2,
      baths: 1,
      square: 5,
      image: "string",
      hotel_name: "",
    },
  ];

  return (
    <section className="home-container">
      <div className="home-inner-container flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center">精選住宿</h2>
          <p className="w-25 text-slate-500">優質住宿給您最好的享受</p>
        </div>

        <div className="home-card-group">
          <Card list={rooms} />
        </div>
        <LinkButton href="/list" />
      </div>
    </section>
  );
};

export default Recommend;
