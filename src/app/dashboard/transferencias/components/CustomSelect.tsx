
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

import './styles.css'; 

interface Props {
    children: React.ReactNode | React.ReactNode[];
    isOpen: boolean;
    selectedOption?: string | null;
    handleSelectToggle?: () => void;
}

const CustomSelect = ({ children, isOpen, handleSelectToggle, selectedOption } : Props) => {
  
  return (
    <div className={`custom-select relative w-full ${isOpen ? 'open' : ''}`}>
      <div onClick={handleSelectToggle} className="selected-option">
        <div className='flex justify-between items-center'>
          <p className='select-none'>{selectedOption || 'Selecciona una opción'}</p>
          <SlArrowDown className="select-arrow" />
        </div>
        <div className="options px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;