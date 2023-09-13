import React from 'react';

interface Props {
    icon: React.ReactNode;
    onClick?: () => void;
}

const MobileOptionsbtn = ({ icon, onClick } : Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="mobile__options__menu__icon bg-gray-200 w-10 h-10 px-2 py-1 shadow-lg flex justify-center items-center  rounded-full"
    >
      {icon}
    </button>
  );
};

export default MobileOptionsbtn;