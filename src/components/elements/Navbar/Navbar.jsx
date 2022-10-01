import React from "react";
import Logo from "../../../assets/svg/Logo";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const MENU = ["Destinations", "Hotels", "Flights", "Bookings", "Login"];

export default function Navbar() {
  return (
    <div className="fixed w-screen text-white z-50 bg-white-50 backdrop-blur">
      <div className="mx-auto max-w-screen-2xl px-24 flex justify-between py-6 items-center">
        <Logo />
        <div className="flex gap-20 items-center">
          {MENU.map((menu) => (
            <button className="label font-base " key={menu}>
              {menu}
            </button>
          ))}
          <button className="border border-white label px-6 py-2 rounded-md">
            Sign up
          </button>
          <button className="flex items-center">
            EN <ChevronDownIcon className="w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
