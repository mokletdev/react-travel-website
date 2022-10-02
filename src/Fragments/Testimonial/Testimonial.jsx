import React from "react";
import Section from "../../components/elements/Section";
import IMAGE from "../../assets/image";

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
      className="min-h-screen text-white grid grid-cols-2"
      decorations={_decorations}
    >
      <div className="flex flex-col justify-start">
        <p className="label">TESTIMONIALS</p>
        <h2 className="font-serif text-gray-800">
          What people say
          <br />
          about Us.
        </h2>
        <div className="flex gap-8 mt-12">
          <div className="w-4 h-4 bg-gray-800 rounded-full" />
          <div className="w-4 h-4 bg-white opacity-70 rounded-full" />
          <div className="w-4 h-4 bg-white opacity-40 rounded-full" />
        </div>
      </div>
      <div className="w-full flex relative">
        <div className="bg-white rounded-xl w-[28rem] drop-shadow-xl transform defaultTransitionAll hover:scale-105 cursor-pointer z-10 absolute">
          <div className="relative p-6">
            <div className="overflow-hidden rounded-full w-16 h-16 absolute -top-8 -left-8">
              <img src={IMAGE.Profile} alt="profile" className="w-full" />
            </div>
            <p className="text-gray-600">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="label text-gray-800 font-bold mt-4">John Sans</p>
            <p className="text-sm text-gray-800 opacity-40">Gujarat, India</p>
          </div>
        </div>
        <div className="border-2 border-white h-48 top-16 rounded-xl w-[28rem] drop-shadow-xl transform defaultTransitionAll hover:scale-105 cursor-pointer z-0 absolute left-12">
          <div className="relative w-full h-full">
            <div className="absolute left-6 bottom-4">
              <p className=" label text-white font-bold mt-4">Chris Thomas</p>
              <p className=" text-sm text-white  opacity-70 opacity-40">
                CEO of Red Button
              </p>
            </div>
          </div>
        </div>
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
