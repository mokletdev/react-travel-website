import React from "react";
import Section from "../../components/elements/Section";
import IMAGE from "../../assets/image";
import {
  BoltIcon,
  MapIcon,
  PaperAirplaneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  MapPinIcon,
  CreditCardIcon,
  RocketLaunchIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import PlaneTrail from "../../assets/svg/PlaneTrail1";

const STEPS = [
  {
    name: "Choose Destination",
    icon: MapPinIcon,
  },
  {
    name: "Make Payment",
    icon: CreditCardIcon,
  },
  {
    name: "Reach Airport on Selected Date",
    icon: RocketLaunchIcon,
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

  console.log(STEPS);

  return (
    <Section
      className="min-h-screen text-white grid grid-cols-2"
      decorations={_decorations}
    >
      <div className="flex flex-col justify-center">
        <p className="label">Easy and Fast</p>
        <h2 className="font-serif text-gray-800">
          Book your next trip
          <br /> in 3 easy steps
        </h2>
        <div className="">
          {STEPS.map((step, i) => (
            <List key={i} data={step} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center relative">
        <div className="bg-white rounded-3xl w-80 p-4 drop-shadow-xl transform defaultTransitionAll hover:scale-105 cursor-pointer z-10 absolute left-24">
          <div className="rounded-2xl overflow-hidden">
            <img src={IMAGE.Trip} alt="trip w-full " />
          </div>
          <p className="label font-semibold text-gray-800 mt-4">
            Trip to Greece
          </p>
          <p className="text-gray-400 mt-2">14-29 June | by Robbin joseph</p>
          <div className="flex gap-4 my-6">
            <div className=" bg-gray-100 rounded-full p-2">
              <BoltIcon className="w-4 text-gray-400" />
            </div>
            <div className=" bg-gray-100 rounded-full p-2">
              <MapIcon className="w-4 text-gray-400" />
            </div>
            <div className=" bg-gray-100 rounded-full p-2">
              <PaperAirplaneIcon className="w-4 text-gray-400 -rotate-45" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 flex items-center">
              <UsersIcon className="w-5 mr-2 text-gray-800" />
              24 people going
            </p>
            <HeartIcon className="w-6 mr-2 text-blue-600" />
          </div>
        </div>

        <div className="absolute left-72 top-[45%] transform translate-y-1/2 defaultTransitionAll hover:scale-105 cursor-pointer bg-white rounded-2xl w-60 p-4 drop-shadow-xl flex gap-3 z-20">
          <div className="rounded-full w-12 h-12 overflow-hidden">
            <img src={IMAGE.RomeIcon} alt="rome" className="w-full" />
          </div>
          <div className="text-gray-800">
            <p className="text-gray-400 text-xs">Ongoing</p>
            <p className="label font-semibold">Trip to rome</p>
            <p className="text-sm">
              <span className="text-purple-400">40%</span>
              {" completed"}
            </p>
            <div className="relative h-1 rounded-full mt-1 w-36 bg-gray-100">
              <div className="absolute h-1 rounded-full w-16 bg-purple-400" />
            </div>
          </div>
        </div>
        <PlaneTrail className="absolute rotate-[130deg] z-0 top-[35%] transform translate-y-1/2 -left-36 w-72" />
      </div>
    </Section>
  );
}

export function List({ data }) {
  return (
    <div className="text-white flex mt-12 gap-4">
      <div className="bg-[#33C5D4] rounded-md w-12 h-12 flex items-center justify-center">
        <data.icon className="h-6 text-gray-800" />
      </div>
      <div>
        <p className="font-bold">{data.name}</p>
        <p className="opacity-70">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna,
          tortor tempus.
        </p>
      </div>
    </div>
  );
}
