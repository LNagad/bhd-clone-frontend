'use client';

import { useResponsiveContext } from '@/contexts';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  showModal: boolean;
}
const LoginModal = ({ showModal }: Props) => {
  const { isSmallScreen, isLargeScreen, handleShowCollapse } = useResponsiveContext();

  if (isLargeScreen) {
    return (
      <div
        className={`py-4 ${showModal ? 'fade-in' : 'fade-out'} 
          bg-body absolute -bottom-[85px] z-50 w-full h-20 rounded-lg shadow-modal-login`}
      >
        <Link href="/login">
          <div
            className="px-4 py-2 flex items-center gap-x-2 text-xs font-semibold text-gray-500
           hover:bg-green-100 hover:text-green-600 hover:transition-all duration-700 cursor-pointer"
          >
            <FontAwesomeIcon
              color="#54ac4c"
              icon={faUser}
              className="text-lg"
            />
            <p className="uppercase">Internet banking personal</p>
          </div>
        </Link>
      </div>
    );
  }
};

export default LoginModal;
