import { Room } from "@TYPES/room";
import Card from "@COM/(fe)/utils/Card";
import { useSearchParams } from "next/navigation";

const rooms: Room[] = [
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
];

const Property = () => {
  const searchParams = useSearchParams().toString();
  console.log(searchParams);

  return (
    <div className="lg:col-span-4 grid gap-4 grid-cols-1 grid-rows-5 sm:grid-cols-2 lg:grid-cols-4">
      <Card list={rooms} />
    </div>
  );
};

export default Property;
