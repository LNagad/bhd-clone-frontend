'use client';

import { FiUser } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';
import { CgAsterisk } from 'react-icons/cg';

import './loginForm.css';
import { useLoginForm } from '../hooks';


const LoginForm = () => {

  const { 
    //methods
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    handleRippleButtonClickAnimation, 
    //properties
    formErrors,
    formValues,
    formValid,
    inputTouched,
    isLoading
  } = useLoginForm();
  
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

          <div className={`loginform__input__user relative flex items-center ps-4 ring-1 gap-x-1
           ring-gray-300 rounded-lg focus:ring-1 ${formErrors.user?.error && 'ring-red-500'}`}>
            <FiUser className="text-gray-500 text-xl" />
            <input
              className="w-full rounded-lg text-[13px] font-semibold text-gray-600 py-3 h-full focus:outline-none 
              focus:ring-0 disabled:bg-transparent"
              name="user"
              id="user"
              value={formValues.user}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              disabled={isLoading}
              autoComplete='off'
              type="text"
              maxLength={25}
            />
            <span className="tooltiptext text-xs w-[60%] bg-gray-700
             text-white font-semibold px-1 py-2 top-[100%] left-[20%] mt-1">
            Si eres usuario con pasaporte, tu usuario son los últimos 11 dígitos de la tarjeta de claves.
            </span>
          </div>
          <span className='text-red-500 text-xs font-bold'>{formErrors.user?.message}</span>
          
        </div>

        <div title='Contraseña' className="flex flex-col gap-y-2">
          <label htmlFor="password">
            <span className="me-1 text-[13px] font-semibold text-gray-700 flex relative">
              Contraseña
              <CgAsterisk className="text-red-600 text-lg absolute -top-1 left-[72px] " />
            </span>
          </label>

          <div className={`w-full flex items-center ps-4 ring-1 gap-x-1 ring-gray-300 rounded-lg 
          focus:ring-1 ${formErrors.password?.error && 'ring-red-500'}`}>
            <BiLockAlt className="text-gray-500 text-xl" />
            <input
              className="w-full text-[13px] rounded-lg font-semibold text-gray-600 py-3 h-full 
              focus:outline-none focus:ring-0 disabled:bg-transparent"
              name="password"
              id="password"
              value={formValues.password}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              disabled={isLoading}
              autoComplete='off'
              type="password"
              maxLength={25}
              
            />
          </div>
          <span className='text-red-500 text-xs font-bold'>{formErrors.password?.message}</span>
        </div>

        <button
          type="submit"
          disabled={inputTouched && (!formValid || isLoading)}
          onClick={handleRippleButtonClickAnimation}
          className={`ripple-button flex relative justify-center bg-primary rounded-lg bg-primary ${inputTouched && (!formValid || isLoading) ? '' : ' hover:bg-green-800 '}
          transition-all duration-500 text-white font-semibold text-sm py-3 disabled:cursor-not-allowed disabled:opacity-50 ${isLoading && 'pointer-events-none'}`
          }>Entrar
          {isLoading && (
            <svg className="animate-spin absolute right-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
        </button>

        <div className='w-full flex flex-col gap-y-2 bg-red-200 rounded-s-[4px] px-6 py-4 border-l-[6px] border-red-600'>
          <p className='text-red-700  text-xs font-semibold'>Usuario o contraseña inválidos.</p>        
        </div>

      </div>
    </form>
  );
};

export default LoginForm;
