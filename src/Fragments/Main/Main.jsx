import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Decor from "../../assets/svg/Decor";
import Flare from "../../assets/svg/Flare";
import Section from "../../components/elements/Section";

export default function Home() {
  const _decorations = (
    <>
      <Decor className="absolute h-[120vh] right-0 bottom-0" />
      <Flare className="absolute -left-[30rem] h-[100vh] w-[100vh] -top-40 z-0" />
    </>
  );

  return (
    <Section
      className="min-h-screen text-white flex items-center "
      decorations={_decorations}
    >
      <div className="z-10">
        <h5 className="uppercase font-bold text-gray-800">
          Best Destinations around the world
        </h5>
        <h1 className="font-serif mt-4">
          Travel, enjoy <br /> and live a new <br />
          and full life
        </h1>
        <p className="my-6 opacity-70 font-normal">
          Built Wicket longer admire do barton vanity itself do in it. <br />
          Preferred to sportsmen it engrossed listening. Park gate <br />
          sell they west hard for the.
        </p>
        <div className="flex">
          <button className="py-3 px-6 bg-primary rounded-lg drop-shadow-primary hover:drop-shadow-primaryHover defaultTransitionAll transform hover:-translate-y-1">
            Find out more
          </button>
          <button className="flex items-center py-1 ml-8">
            <div className="p-4 bg-secondary rounded-full mr-4 drop-shadow-secondary hover:drop-shadow-secondaryHover defaultTransitionAll  ">
              <PlayIcon className="w-4" />
            </div>
            Play Demo
          </button>
        </div>
      </div>
    </Section>
  );
}
