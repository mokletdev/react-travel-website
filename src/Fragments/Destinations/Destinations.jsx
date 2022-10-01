import React from "react";
import Section from "../../components/elements/Section";
import IMAGE from "../../assets/image";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import PlaneTrail from "../../assets/svg/PlaneTrail2";

const TOPDESTINATIONS = [
  {
    name: "Rome, Italy",
    price: "5,42k",
    duration: "10",
    image: IMAGE.Rome,
  },
  {
    name: "London, UK",
    price: "4,2k",
    duration: "12",
    image: IMAGE.London,
  },
  {
    name: "Rome, Italy",
    price: "15k",
    duration: "28",
    image: IMAGE.Europe,
  },
];

export default function Home() {
  const _decorations = (
    <>
      {/* <div className="absolute right-1/3 transform translate-x-1/2 translate-y-1/2 bottom-[40%] h-[36rem] ">
        <img src={IMAGE.Main} alt="" className="h-full" />
      </div> */}
    </>
  );

  return (
    <Section
      className="min-h-screen text-white flex items-center justify-center flex-col"
      decorations={_decorations}
    >
      <p className="label">Top Selling</p>
      <h2 className="font-serif text-gray-800">Top Destinations</h2>
      <div className="flex justify-center w-full gap-16 pt-16">
        {TOPDESTINATIONS.map((v, i) => (
          <Card key={i} data={v} />
        ))}
      </div>
      <PlaneTrail className="absolute z-0 top-0 right-0 w-60" />
    </Section>
  );
}

export function Card({ data }) {
  return (
    <div className="bg-white defaultTransitionAll hover:drop-shadow-2xl rounded-2xl text-gray-800 transform hover:-translate-y-1 cursor-pointer overflow-hidden">
      <div className="w-72 max-h-80 overflow-hidden">
        <img src={data.image} alt={data.name} className="w-full" />
      </div>
      <div className="px-4 pt-4 pb-6">
        <div className="flex justify-between pb-2 label">
          <p className="font-bold">{data.name}</p>
          <p>${data.price}</p>
        </div>
        <div className="flex items-center">
          <CalendarDaysIcon className="w-5 mr-3" />
          <p className="text-gray-400">{data.duration} days trip</p>
        </div>
      </div>
    </div>
  );
}
