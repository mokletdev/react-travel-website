import React from "react";
import Section from "../../components/elements/Section";
import IMAGE from "../../assets/image";
import CornerDecor from "../../assets/svg/CornerDecor1";

const OEFFEREDSERVICES = [
  {
    name: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    image: IMAGE.CalculatedWeather,
  },
  {
    name: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    image: IMAGE.BestFlights,
  },
  {
    name: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    image: IMAGE.LocalEvents,
  },
  {
    name: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
    image: IMAGE.Customization,
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
      <CornerDecor className="absolute top-24 right-24" />
      <p className="label">CATEGORY</p>
      <h2 className="font-serif text-gray-800">We Offer Best Services</h2>
      <div className="flex justify-center w-full gap-10 pt-16">
        {OEFFEREDSERVICES.map((v, i) => (
          <Card key={i} data={v} />
        ))}
      </div>
    </Section>
  );
}

export function Card({ data }) {
  return (
    <div className="hover:bg-white defaultTransitionAll hover:drop-shadow-2xl rounded-3xl text-white hover:text-gray-800 text-center w-60 px-6 pb-12 pt-4 transform hover:-translate-y-1 cursor-pointer">
      <img src={data.image} alt={data.name} className="w-36 mx-auto" />
      <p className="font-semibold label text-gray-800">{data.name}</p>
      <p>{data.desc}</p>
    </div>
  );
}
