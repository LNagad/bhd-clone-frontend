'use client';

import { useEffect, useState } from 'react';
import { CustomSelectContainer } from './components';
import { TRANSACTION_TYPES } from './models';

import './styles.css';

type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

const handleSelectToggle = (set: SetStateFn<boolean>) => {
  set((prevIsOpen) => !prevIsOpen);
};

const TransferenciasPage = () => {
  const [tipoTransferenciaSelected, setTipoTransferenciaSelected] = useState<string | null>(null);
  const [transferenciaIsOpen, setTransferenciaIsOpen] = useState(false);

  const handleOnTipoTransferenciaSelect = (item : string) => {
    setTipoTransferenciaSelected(item);
  };

  useEffect(() => {
    // Esto se ejecutará cada vez que transferenciaIsOpen cambie
    if (tipoTransferenciaSelected !== null) {
      setTransferenciaIsOpen(false);
    }
  }, [tipoTransferenciaSelected]); 

  return (
    <section className="w-screen h-screen bg-gray-200 gap-x-4 py-8 px-28 flex justify-between">
      <div className="flex flex-col py-4 px-5 w-[68%] gap-y-11 bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Pagos y Transferencias</h2>

        <div className="w-[60%]">
          <CustomSelectContainer
            labelSelect='Tipo de transacción'
            isOpen={transferenciaIsOpen}
            selected={tipoTransferenciaSelected}
            items={TRANSACTION_TYPES}
            handleSelectToggle={() => handleSelectToggle(setTransferenciaIsOpen)} 
            handleOnSelect={handleOnTipoTransferenciaSelect}  />
        </div>
      </div>
      <div className="flex flex-col py-4 px-5 w-[32%] bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Accesos</h2>
      </div>
    </section>
  );
};

export default TransferenciasPage;