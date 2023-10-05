export type Room = {
  id: readonly string;
  location: string;
  accommodationType: string;
  price: number;
  name: string;
  remarks: string;
  beds: number;
  baths: number;
  square: number;
  image: string;
  hotel_name: string;
};

export type RoomDetail = Room & {
  description: string;
  devices: string[];
};
