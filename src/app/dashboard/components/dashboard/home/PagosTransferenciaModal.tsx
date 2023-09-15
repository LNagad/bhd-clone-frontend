'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useDashboardUIStore } from '@/store';
import AccesosRapidos from '../AccesosRapidos';
import './styles.css';

const PagosTransferenciaModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isPagosModalOpen, togglePagosModal } = useDashboardUIStore((state) => state);

  const handleMouseOut = (e : any) => {
    // Comprueba si el evento onMouseOut se origina en el div principal
    if (modalRef.current && !modalRef.current.contains(e.relatedTarget)) {
      togglePagosModal();
    }
  };


  return (
    <div className={`pagos_transferencia-modal w-full absolute z-50 
    ${isPagosModalOpen ? 'flex  justify-end' : 'hidden'}`}>
      <div 
        ref={modalRef} 
        onMouseOut={handleMouseOut} 
        className="w-[90%] pagos_transferencia-modal-shadow bg-white shadow-xl px-8 pt-9 pb-9 rounded-lg 
        flex justify-between ">
        <div className='gap-y-6 flex flex-col w-[72%]'>
          <p className="font-medium tracking-wide text-[16px] font-sans text-gray-900 text-opacity-95">¿Qué deseas realizar hoy?</p>
          <div className="w-full">
            <AccesosRapidos bigTexts={true} noShowTitle={true} />
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <p className="font-medium text-[15px] tracking-wide  text-gray-900 text-opacity-95">
            Solicita la visa mi país
          </p>
          <Image src="/tarjeta.png" className='w-full h-28 ' width={100} height={100} alt='visa mi pais png'  />
          <button className='bg-stone-600 px-1 text-sm py-2 rounded-lg hover:bg-stone-700 text-white'>Mas información</button>
        </div>
      </div>
    </div>
  );
};

export default PagosTransferenciaModal;
