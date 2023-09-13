'use client';
import MobileOptionsbtn from './MobileOptionsbtn';
import { FiSettings, FiUser } from 'react-icons/fi';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { useSession } from 'next-auth/react';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

const NavbarWelcoming = () => {
  const { data : session} =  useSession();
  return (
    <div className="largescreen__options__section w-[50%] gap-x-4 flex justify-end items-center">
      <p className="text-[13px] font-semibold text-gray-400">
      Bienvenido(a){' '}<span className="text-green-600">{session?.user.userName}</span>
      </p>
      <div className="xs:hidden sm:flex justify-end gap-x-4 ">
        <MobileOptionsbtn icon={<FiUser className="text-gray-600 text-2xl font-semibold" />} />
        <MobileOptionsbtn icon={<FiSettings className="text-gray-600 text-2xl font-semibold" />} />
        <MobileOptionsbtn icon={<HiArrowRightOnRectangle className="text-red-600 text-2xl font-semibold" />} />
      </div>
    </div>
  );
};

export default NavbarWelcoming;