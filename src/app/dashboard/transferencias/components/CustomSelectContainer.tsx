import CustomSelect from './CustomSelect';

interface Props {
    selected: string | null;
    isOpen: boolean;
    items: { value: string, label: string }[],
    labelSelect: string;
    handleSelectToggle: () => void;
    handleOnSelect: (item: string) => void;
    className?: string;
}

const CustomSelectContainer = ({
  items, labelSelect, selected, isOpen, className, 
  handleOnSelect, handleSelectToggle
} : Props) => {
  return (
    <div className={`w-full flex flex-col gap-y-2  ${className}`}>
      <label className='text-sm text-gray-950 font-medium select-none'>{labelSelect}</label>
      <CustomSelect isOpen={ isOpen } selectedOption={ selected } handleSelectToggle={ handleSelectToggle } >
        {items.map((item) => {
          return (
            <div 
              key={item.value} 
              className={`option select-none px-6 py-2 text-sm font-medium text-gray-500 
               ${selected === item.label ? 'bg-primary text-white' : ' hover:bg-green-100'}`} 
              onClick={() => handleOnSelect(item.label)}>
              {item.label}
            </div>
          );
        })}
      </CustomSelect>
    </div>
  );
};

export default CustomSelectContainer;