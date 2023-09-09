"use client";

import React from "react";
import BarsSVG from "./BarsSVG";
import LaptopSVG from "./LaptopSVG";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import SelectExperienceColapse from "./SelectExperienceColapse";

export const HomeNavbar = () => {
  return (
    <nav className="min-w-full flex flex-col">
      <section className="w-full flex justify-between px-5 py-5">
        <div className="w-1/5 flex items-center">
          <BarsSVG fontSize={22} fill="#8b8f8b" />
        </div>
        <div className="w-[70%] flex items-center justify-center">
          <Link href="/">
            <Image
              className="w-28"
              src={"/bhd_logo.png"}
              width={100}
              height={0}
              alt=" logo"
            />
          </Link>
        </div>
        <div className="w-1/4 flex items-center gap-x-1">
          <LaptopSVG fontSize={22} fill="#54AC4C" />
          <p className="uppercase text-sm font-semibold text-green-600">
            Iniciar <br /> sesión
          </p>
        </div>
      </section>

      <section className="w-full bg-primary">
        <SelectExperienceColapse />
      </section>
    </nav>
  );
};

export default HomeNavbar;
