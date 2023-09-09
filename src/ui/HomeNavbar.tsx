"use client";

import { BarsSVG, LaptopSVG } from "./icons";
import Link from "next/link";
import Image from "next/image";
import SelectExperienceColapse from "./SelectExperienceColapse";

export const HomeNavbar = () => {
  return (
    <nav className="min-w-full flex flex-col">
      <section className="w-full flex justify-between p-5 sm:px-7 py-6 ">
        <div className="w-1/5 flex items-center">
          <BarsSVG className="text-xl sm:text-3xl" fill="#8b8f8b" />
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
        <div className="w-1/4 flex items-center gap-x-2 justify-end">
          <LaptopSVG className="text-xl sm:text-3xl" fill="#54AC4C" />
          <p className="uppercase text-sm sm:text-lg font-semibold sm:font-normal text-green-600">
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
