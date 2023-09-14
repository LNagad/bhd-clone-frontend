'use client';

import {Accordion, AccordionItem, NextUIProvider} from '@nextui-org/react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';

const ResumenProductos = () => {
  return (
    <NextUIProvider>
      <section className='bg-white p-4 shadow-sm w-full flex flex-col gap-y-3 rounded-md'>
        <h6 className='text-xl text-gray-500 font-medium text-opacity-90'>360 - Resumen de Productos</h6>
      
        <div className=' transition-background duration-700 w-full'>
          <Accordion defaultExpandedKeys={['1']} className='w-full p-0'>
            <AccordionItem  
              key="1" 
              aria-label="Cuentas Accordion" 
              title="CUENTAS (1)"
              className='accordion__cuentas font-medium  w-full text-gray-950 flex flex-col justify-center p-0'
              indicator={({ isOpen }) => (
                isOpen 
                  ? <AiOutlineMinusCircle className='text-3xl text-green-600 rotate-90' /> 
                  : <AiOutlinePlusCircle className='text-3xl text-sky-600' />)}>
              <div className='bg-white p-0'>
               
                <div className='text-gray-950 font-medium flex flex-col gap-y-2 text-sm'>
                  <div className='flex w-full gap-y-2 justify-between items-center'>
                    <p className='uppercase font-semibold text-[16.5px]'>cta.ahorros/nomina</p>
                    <p>Ahorros</p>
                  </div>
                  <div className='flex w-full gap-y-2 justify-between items-center'>
                    <p>32131470036</p>
                    <button type="button" className='acc__edit-account-alias-btn'>
                      <GoPencil className='acc__edit-account-alias-btn-icon' />
                    </button>
                    <p>Activa</p>
                  </div>
                  <button type="button" className='flex items-center gap-x-1 font-semibold text-sky-500 hover:text-sky-600'>
                    <FiEye className='text-lg' />
                    <p>Ver detalle de producto</p>
                  </button>
      
                  <div className='mt-4 w-full flex justify-end'>
                    <div className='w-[50%]  text-gray-600 font-medium flex flex-col gap-y-2 text-sm'>
                      <div className='flex w-full justify-between'>
                        <p>Balance disponible:</p>
                        <p>RD$ 1,560.53</p>
                      </div>
                      <div className='flex w-full justify-between'>
                        <p>Balance en transito:</p>
                        <p>RD$ 0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
            </AccordionItem>
      
          </Accordion>
        </div>
      </section>
    </NextUIProvider>
  );
};

export default ResumenProductos;