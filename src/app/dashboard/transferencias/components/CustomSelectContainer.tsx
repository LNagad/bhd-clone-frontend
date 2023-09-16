import CustomSelect from './CustomSelect';

interface Props {
    selected: string | null;
    isOpen: boolean;
    items: { value: string, label: string }[],
    labelSelect: string;
    handleSelectToggle: () => void;
    handleOnSelect: (item: string) => void;
}

const CustomSelectContainer = ({selected, isOpen, handleOnSelect, handleSelectToggle, items, labelSelect} : Props) => {
  return (
    <div className='w-full flex flex-col gap-y-2'>
      <label className='text-sm text-gray-950 font-medium'>{labelSelect}</label>
      <CustomSelect isOpen={ isOpen } selectedOption={ selected } handleSelectToggle={ handleSelectToggle } >
        {items.map((item) => {
          return (
            <div 
              key={item.value} 
              className="option select-none px-1 py-2" 
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