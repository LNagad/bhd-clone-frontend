'use client';

import { Select, SelectItem } from '@nextui-org/react';
import './styles.css';

const TRANSACTION_TYPES = [
  { value: '1', label: 'Transferencia entre cuentas' },
  { value: '2', label: 'Transferencia a otras cuentas' },
  { value: '3', label: 'Pago de tarjeta de crédito' },
  { value: '4', label: 'Pago de préstamo' },
];

const TransferenciasPage = () => {

  const handleOnSelect = (item : any) => {
    console.log(item.target.innerText);
  };

  return (
    <section className="w-screen h-screen bg-gray-200 gap-x-4 py-8 px-28 flex justify-between">
      <div className="flex flex-col py-4 px-5 w-[68%] gap-y-11 bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Pagos y Transferencias</h2>

        <div className="w-[60%]">
          <div className='w-full flex flex-col gap-y-2'>
            <label className='text-sm text-gray-950 font-medium'>Tipo de transacción</label>
            <Select
              aria-label='select_transaction_type'
              items={TRANSACTION_TYPES}
              placeholder="Selecciona la transacción active"
              className="w-full"
              listboxProps={{
                onSelect: (item) => console.log(item),
                disallowEmptySelection: true,
                itemClasses: {
                  base: [
                    'rounded-md',
                    'px-4',
                    'py-3',
                    'font-medium',
                    'transition-opacity',
                    
                    
                    // 'data-[selectable=true]:focus:bg-lime-500',

                    // 'data-[selected=true]:focus:text-white',
                    // 'data-[selected=true]:hover:bg-lime-500',
                    // 'data-[selected=true]:focus:bg-lime-500',
                    // 'data-[selected=true]:bg-lime-500',
                    // 'data-[selected=true]:font-semibold',
                    // 'data-[selected=true]:text-white',
                    
                    
                    'data-[pressed=true]:opacity-70',
                    'data-[focus-visible=true]:ring-default-500',
                  ],
                },
              }}
              popoverProps={{
                classNames: {
                  base: 'p-0 border-small border-divider bg-background text-xl',
                  arrow: 'bg-default-200 text-xl',
                },
              }}
            
            >
              {(transaction) => (
                <SelectItem onClick={handleOnSelect} key={transaction.value} textValue={transaction.label}>
                  <div className="flex gap-2 items-center0">
                    <p>{transaction.label}</p>
                  </div>
                </SelectItem>
              )}
            </Select>
          
            {/* <Select
              items={TRANSACTION_TYPES}
              placeholder="Selecciona la transacción active"
              className="w-full focus:ring-2 active:ring-primary-500 active:border-transparent"
            >
              {(transaction) => <SelectItem  key={transaction.value}>{transaction.label}</SelectItem>}
            </Select> */}
          </div>
          {/* <select className="w-full">
            <option>Seleccione una opción</option>
            <option>Transferencia entre cuentas</option>
            <option>Transferencia a otras cuentas</option>
            <option>Pago de tarjeta de crédito</option>
            <option>Pago de préstamo</option>
          </select> */}
        </div>
      </div>
      <div className="flex flex-col py-4 px-5 w-[32%] bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Accesos</h2>
      </div>
    </section>
  );
};

export default TransferenciasPage;