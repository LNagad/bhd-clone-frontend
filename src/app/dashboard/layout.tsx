'use client';

import { useSession } from 'next-auth/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import {
  MobileOptionsSection,
  MobileOptionsbtn,
  NavbarHeader,
  NavbarUl,
  NavbarWelcoming,
} from './components';

import {NextUIProvider} from '@nextui-org/react';

interface Props {
  children: React.ReactNode;
}

const Layour = ({ children }: Props) => {
  const { data: session } = useSession();
  return (
    <>
      <NextUIProvider>
        <header>
          <nav className="w-full">
            <div className="w-full px-2 sm:px-10 bg-neutral-100 flex flex-col">
              <div className="w-full flex py-4 justify-between">
                <NavbarHeader />
                <NavbarWelcoming />
              </div>
            </div>
            <div className="w-full hidden sm:flex px-10 bg-gray-800">
              <NavbarUl />
            </div>
            <div className="mobile__options__section w-full sm:hidden  bg-gray-800 px-2 py-3 flex justify-between">
              <MobileOptionsSection />
            </div>
            <div></div>
          </nav>
        </header>
        {children}
      </NextUIProvider>
    </>
  );
};

export default Layour;
