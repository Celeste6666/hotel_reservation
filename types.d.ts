// props
export type SVGProps = {
  className?: string;
};

export type RoomListFilterProps = {
  start: number;
  end: number;
  location_ids: string[];
};

// data
export type NaveLink = {
  name: string;
  href: string;
  key: string;
};

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

export type Hotel = {
  id: readonly string;
  location: string;
  location_id: readonly string;
  image: string;
  description: string;
  services: string[];
};

export type RoomDetail = Room & {
  description: string;
  devices: string[];
};

// User
export type User = {
  name?: string;
  email: string;
  hashed_password: string;
};
