'use client';

import { useState } from 'react';

import { LaptopSVG } from './icons';

import LoginModal from './LoginModal';
import './home.css';

import { ResponsiveContextProvider } from '@/contexts';

const HomeLogin = () => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
      className={`relative w-[25%] md:w-[12rem] flex items-center justify-end
      md:justify-evenly md:rounded-lg md:px-4 md:ring-1 ring-green-700 hover:cursor-pointer sm:me-5`}
    >
      <LaptopSVG
        className="text-xl md:text-[22px] w-full md:w-auto"
        fill="#54AC4C"
      />
      <p
        title="Iniciar sesión"
        className="uppercase  md:text-start text-sm md:text-[16px] 
        font-semibold md:font-normal text-green-600"
      >
        Iniciar sesión
      </p> 
      
      <ResponsiveContextProvider>
        <LoginModal showModal={showModal} />
      </ResponsiveContextProvider>

    </div>
  );
};

export default HomeLogin;
