"use client";
import { useState } from "react";
import { UnmountClosed } from "react-collapse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { CloseMarkSVG, ShopSVG } from "./icons";
import { useRouter } from "next/router";
import Link from "next/link";

const SelectExperienceColapse = () => {
  const [visible, setVisible] = useState(false);

  const experienceMenuItems = [
    { name: "Personal", link: "/"},
    { name: "Pyme", link: "/pyme" },
    { name: "Corporativa y Empresarial", link: "/empresa"},
  ];

  const handleSetCollapseVisibleWithDelay = () => {
    setTimeout(() => setVisible(false), 1000);
  }

  return (
    <>
      <button
        className="w-full py-3 text-white uppercase text-sm flex justify-center items-center gap-x-3"
        style={{ fontWeight: 500 }}
        onClick={() => setVisible((p) => !p)}
      >
        <ShopSVG fontSize={16} fill="#fff" />
        <p style={{ fontWeight: 500, fontSize: 14 }}>Personal</p>
        <FontAwesomeIcon fontSize={16} icon={faAngleDown} bounce={!visible} />
      </button>

      <UnmountClosed isOpened={visible}>
        {experienceMenuItems.map((item) => (
          <Link key={item.link} href={item.link} onClick={handleSetCollapseVisibleWithDelay}>
            <div
              className={`px-8 py-3 flex items-center gap-x-2 
              ${item.link === window.location.pathname && "bg-primary-selected "}`}
            >
              <ShopSVG fontSize={22} fill="#fff" />
              <p
                className="text-white uppercase"
                style={{ fontWeight: 500, fontSize: 12 }}
              >{item.name}
              </p>
            </div>
          </Link>
        ))}

        <button
          className="w-full px-8 py-3 text-white uppercase flex items-center gap-x-1"
          style={{ fontWeight: 500, fontSize: 12 }}
          onClick={() => setVisible((p) => !p)}
        >
          <CloseMarkSVG fill="#fff" fontSize={17} />
          <p style={{ fontWeight: 500, fontSize: 12 }}>Cerrar</p>
        </button>
      </UnmountClosed>
    </>
  );
};

export default SelectExperienceColapse;
