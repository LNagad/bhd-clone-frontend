'use client';


import { useState } from 'react';
import { CustomSelect } from './components';
import './styles.css';

const TRANSACTION_TYPES = [
  { value: '1', label: 'Transferencia entre cuentas' },
  { value: '2', label: 'Transferencia a otras cuentas' },
  { value: '3', label: 'Pago de tarjeta de crédito' },
  { value: '4', label: 'Pago de préstamo' },
];

const TransferenciasPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnSelect = (item : string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <section className="w-screen h-screen bg-gray-200 gap-x-4 py-8 px-28 flex justify-between">
      <div className="flex flex-col py-4 px-5 w-[68%] gap-y-11 bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Pagos y Transferencias</h2>

        <div className="w-[60%]">
          <div className='w-full flex flex-col gap-y-2'>
            <label className='text-sm text-gray-950 font-medium'>Tipo de transacción</label>
            <CustomSelect isOpen={ isOpen } selectedOption={ selected } handleSelectToggle={ handleSelectToggle } >
              {TRANSACTION_TYPES.map((item) => {
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
        </div>
      </div>
      <div className="flex flex-col py-4 px-5 w-[32%] bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Accesos</h2>
      </div>
    </section>
  );
};

export default TransferenciasPage;