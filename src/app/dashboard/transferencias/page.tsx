'use client';

import { useEffect, useState } from 'react';
import { CustomSelectContainer } from './components';
import { TRANSACTION_TYPES } from './models';

import './styles.css';

type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

const handleSelectToggle = (set: SetStateFn<boolean>) => {
  set((prevIsOpen) => !prevIsOpen);
};

const handleSetIsClose = (set: SetStateFn<boolean>) => {
  set(false);
};

const TransferenciasPage = () => {
  const [transferenciaIsOpen, setTransferenciaIsOpen] = useState(false);
  const [productoOrigenIsOpen, setProductoOrigenIsOpen] = useState(false);
  const [productoDestinoIsOpen, setProductoDestinoIsOpen] = useState(false);

  const [tipoTransferenciaSelected, setTipoTransferenciaSelected] = useState<string | null>(null);
  const [productoOrigenSelected, setProductoOrigenSelected] = useState<string | null>(null);
  const [productoDestinoSelected, setProductoDestinoSelected] = useState<string | null>(null);
  
  const handleOnProductoOrigenSelect = (item : string) => {
    setProductoOrigenSelected(item);
  };

  const handleOnProductoDestinoSelect = (item : string) => {
    setProductoDestinoSelected(item);
  };

  const handleOnTipoTransferenciaSelect = (item : string) => {
    setTipoTransferenciaSelected(item);
  };

  // useEffect(() => {
  //   // Esto se ejecutará cada vez que transferenciaIsOpen cambie
  //   if (tipoTransferenciaSelected !== null) {
  //     setTransferenciaIsOpen(false);
  //   }
  // }, [tipoTransferenciaSelected]); 

  return (
    <section className="w-screen h-screen bg-gray-200 gap-x-4 py-8 px-28 flex justify-between">
      <div className="flex flex-col py-4 px-5 w-[68%] gap-y-11 bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Pagos y Transferencias</h2>

        <div className="w-[60%] flex flex-col gap-y-7">
          <CustomSelectContainer
            className='bg-white z-40'
            labelSelect='Tipo de transacción'
            isOpen={transferenciaIsOpen}
            selected={tipoTransferenciaSelected}
            items={TRANSACTION_TYPES}
            handleOnSelect={handleOnTipoTransferenciaSelect}
            handleSelectToggle={() => handleSelectToggle(setTransferenciaIsOpen)} 
            handleSetIsClose={() => handleSetIsClose(setTransferenciaIsOpen)}  />

          <CustomSelectContainer
            className='bg-white z-30'
            labelSelect='Producto de Origen'
            isOpen={productoOrigenIsOpen}
            selected={productoOrigenSelected}
            items={TRANSACTION_TYPES}
            handleOnSelect={handleOnProductoOrigenSelect}
            handleSelectToggle={() => handleSelectToggle(setProductoOrigenIsOpen)} 
            handleSetIsClose={() => handleSetIsClose(setProductoOrigenIsOpen)}  />

          <CustomSelectContainer
            labelSelect='Producto de Destino'
            isOpen={productoDestinoIsOpen}
            selected={productoDestinoSelected}
            items={TRANSACTION_TYPES}
            handleOnSelect={handleOnProductoDestinoSelect}
            handleSelectToggle={() => handleSelectToggle(setProductoDestinoIsOpen)} 
            handleSetIsClose={() => handleSetIsClose(setProductoDestinoIsOpen)}  />

          <div className="flex flex-row justify-between relative">
            <legend>Transferencia a terceros en bhd</legend>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Transferir
            </button>
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