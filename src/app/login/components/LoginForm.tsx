'use client';

import { FiUser } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';
import { CgAsterisk } from 'react-icons/cg';
import { FormEvent } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let x = e.clientX - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.offsetTop;

    let ripples = document.createElement('span');
    ripples.className = 'ripple-span';
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    e.currentTarget.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full h-full gap-y-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="user">
            <span className="me-1 text-[13px] font-semibold text-gray-700 flex relative">
              Usuario
              <CgAsterisk className="text-red-600 text-lg absolute -top-1 left-12" />
            </span>
          </label>

          <div className="flex items-center px-4 ring-1 gap-x-1 ring-gray-300 rounded-lg">
            <FiUser className="text-gray-500 text-xl" />
            <input
              className="w-full text-[13px] font-semibold text-gray-600 py-3 h-full focus:outline-none focus:ring-0 "
              name="user"
              type="text"
              maxLength={25}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">
            <span className="me-1 text-[13px] font-semibold text-gray-700 flex relative">
              Contraseña
              <CgAsterisk className="text-red-600 text-lg absolute -top-1 left-[72px] " />
            </span>
          </label>

          <div className="flex items-center px-4 ring-1 gap-x-1 ring-gray-300 rounded-lg">
            <BiLockAlt className="text-gray-500 text-xl" />
            <input
              className="w-full text-[13px] font-semibold text-gray-600 py-3 h-full focus:outline-none focus:ring-0 "
              name="password"
              type="password"
              maxLength={25}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleButtonClick}
          className="ripple-button  "
        >
          Entrar
        </button>
        {/*  transition-all duration-500 */}
      </div>
    </form>
  );
};

export default LoginForm;
