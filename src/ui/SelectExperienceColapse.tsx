'use client';
import Link from 'next/link';
import { useState } from 'react';
import { UnmountClosed } from 'react-collapse';

import { CloseMarkSVG, ShopSVG } from './icons';
import { BiChevronDown }from 'react-icons/bi';

const SelectExperienceColapse = () => {
  const [visible, setVisible] = useState(false);

  const experienceMenuItems = [
    { name: 'Personal', link: '/'},
    { name: 'Pyme', link: '/pyme' },
    { name: 'Corporativa y Empresarial', link: '/empresa'},
  ];

  const handleSetCollapseVisibleWithDelay = () => {
    setTimeout(() => setVisible(false), 1000);
  };

  let location = '';

  if (typeof window === 'undefined'){
    location = '/';
  } else {
    location = window.location.pathname;
  }

  return (
    <>
      <button
        className="w-full flex justify-center items-center text-white uppercase gap-x-3 
        py-3 sm:py-5 text-sm sm:text-lg"
        style={{ fontWeight: 500 }}
        onClick={() => setVisible((p) => !p)}
      >
        <ShopSVG className="text-lg" fill="#fff" />
        <p style={{ fontWeight: 500 }}>Personal</p>
        <BiChevronDown className={`text-white text-3xl font-bold me-2 ${visible ? 'animate-none' : 'animate-bounce'}`} />
      </button>

      <UnmountClosed isOpened={visible}>
        {experienceMenuItems.map((item) => (
          <Link key={item.link} href={item.link} onClick={handleSetCollapseVisibleWithDelay}>
            <div
              className={`px-8 py-3 flex items-center gap-x-2 
              ${item.link ===  location? 'bg-primary-selected ' : 'hover:bg-green-700'}`}
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
