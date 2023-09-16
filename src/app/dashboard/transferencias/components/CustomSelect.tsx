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
    <div className={`custom-select relative w-full rounded-md  ${isOpen ? 'open ring ring-green-600 ring-offset-1 ring-opacity-60' : ''}`}>
      <div onClick={handleSelectToggle} className="selected-option select-none">
        <div className='flex justify-between items-center'>
          <p className='select-none'>{selectedOption || 'Selecciona una opción'}</p>
          <SlArrowDown className="select-arrow" />
        </div>
        <div className="options py-2 bg-white shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;