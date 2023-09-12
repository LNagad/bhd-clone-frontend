'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const BankDashboard = () => {
  
  const { data : session} =  useSession();
  
  
  return (
    <main className='bg-gray-100 lg:px-[110px] lg:py-5 h-full'>
      <section className='w-full h-full flex gap-x-4 flex-wrap'>
        
        <div className='large_screen__view w-[56%] flex flex-col gap-y-4'>
          <section className='bg-white p-4 shadow-sm w-full rounded-md'>
            <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>360 - Resumen de Productos</h6>
          </section>

          <div className='w-full flex justify-between'>
            
            <div className='w-[40%] flex flex-col gap-y-4'>
              <section className='bg-white p-4 shadow-sm w-full rounded-md flex flex-col gap-y-8'>
                <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Centro de contacto</h6>
                <BsTelephone className='text-7xl font-bold text-green-700 text-center w-full' />
                <div>
                  <p className='text-gray-400 font-semibold text-xs text-opacity-95'>servicioalcliente@bhd.com.do</p>
                  <p className='text-gray-400 font-semibold text-xs text-opacity-95'>T. 809-243-5000</p>
                </div>
              </section>
              <section className='bg-white p-4 shadow-sm w-full rounded-md flex flex-col gap-y-3'>
                <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Visualizar estados</h6>
                <div className='w-full py-3 bg-sky-200 flex gap-x-1 items-center'>
                  <AiOutlineInfoCircle className='text-lg text-sky-800 w-[36px]' />
                  <p className='text-xs text-sky-800 font-medium '>No posees productos para visualizar estados de cuenta</p>
                </div>
              </section>
            </div>
           
            <section className='bg-white p-4 shadow-sm w-[58%] h-44 rounded-md'>
              <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Graficas y estadisticas</h6>
            </section>
          </div>

          
        </div>
        
        <div className='large_screen__view w-[41%] flex flex-col gap-y-4'>
          <section className='bg-white px-6 py-8 shadow-sm w-full  rounded-md'>
            <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Divisas</h6>
          </section>

          <section className='bg-white px-6 py-8 shadow-sm w-full  rounded-md'>
            <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Accesos rapidos</h6>
          </section>

          <section className='bg-white px-6 py-8 shadow-sm w-full  rounded-md'>
            <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Calendario de pagos</h6>
          </section>
          
        </div>

        
        <h1>page</h1>
        {JSON.stringify(session?.user, null, 2)}
      </section>
    </main>
  );
};

export default BankDashboard;