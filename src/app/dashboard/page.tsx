'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { AccesosRapidos, CentroContacto, DivisaSwipper, ResumenProductos } from './components';


const BankDashboard = () => {
  
  const { data : session} =  useSession();
  
  return (
    <main className='bg-gray-100 lg:px-[110px] lg:py-5 h-full'>
      <section className='w-full h-full flex gap-x-4 flex-wrap'>
        
        <div className='large_screen__view hidden sm:flex flex-col w-[56%] gap-y-4'>
          <section className='bg-white p-4 shadow-sm w-full flex flex-col gap-y-3 rounded-md'>
            <ResumenProductos />
          </section>

          <div className='w-full flex justify-between'>
            <div className='w-[40%] flex flex-col gap-y-4'>
              <CentroContacto />
            </div>
            <section className='bg-white p-4 shadow-sm w-[58%] h-44 rounded-md'>
              <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Graficas y estadisticas</h6>
            </section>
          </div>

          
        </div>
        
        <div className='large_screen__view hidden sm:flex flex-col w-[41%] gap-y-4'>

          <section className='w-full bg-white h-[84px] shadow-sm px-6 rounded-md flex justify-between items-center'>
            <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Divisas</h6>
            <div className='w-[80%] h-full'>
              <DivisaSwipper />
            </div>
          </section>

          <section className='w-full bg-white px-6 py-8 shadow-sm rounded-md flex flex-col gap-y-4'>
            <AccesosRapidos />
          </section>

          <section className='w-full bg-white px-6 py-8 shadow-sm  rounded-md'>
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