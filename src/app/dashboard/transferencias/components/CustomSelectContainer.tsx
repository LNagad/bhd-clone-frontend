import React, { useRef, useEffect } from 'react';
import CustomSelect from './CustomSelect';

interface Props {
  selected: string | null;
  isOpen: boolean;
  items: { value: string; label: string }[];
  labelSelect: string;
  handleSelectToggle: () => void;
  handleOnSelect: (item: string) => void;
  className?: string;
  handleSetIsClose: () => void;
}

const CustomSelectContainer = ({
  items,
  labelSelect,
  selected,
  isOpen,
  className,
  handleOnSelect,
  handleSelectToggle,
  handleSetIsClose
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleSetIsClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleSelectToggle]);

  return (
    <div className={`w-full rounded-md  flex flex-col gap-y-2 ${className}`} ref={containerRef}>
      <label className='text-[15px] text-gray-950 font-medium select-none'>
        {labelSelect}
      </label>
      <CustomSelect isOpen={isOpen} selectedOption={selected} handleSelectToggle={handleSelectToggle}>
        {items.map((item) => {
          return (
            <div
              key={item.value}
              className={`option select-none px-2 py-[10px] text-[16px] font-medium text-gray-500 
               ${selected === item.label ? 'bg-primary text-white' : ' hover:bg-green-100'}`}
              onClick={() => handleOnSelect(item.label)}
            >
              {item.label}
            </div>
          );
        })}
      </CustomSelect>
    </div>
  );
};

export default CustomSelectContainer;
