'use client';

import { useDashboardUIStore } from '@/store';

const NavbarUl = () => {
  const { togglePagosModal, isPagosModalOpen } = useDashboardUIStore((state) => state);
  
  return (
    <ul className='w-full text-white  font-medium text-opacity-95 text-sm flex gap-x-6'>
      <li
        className='py-3 border-b-[3px] w-fit border-green-400 cursor-pointer'>
        Mis Productos
      </li>
      <li
        onMouseOver={() => togglePagosModal() }
        className={`py-3 hover:border-b-[3px] ${isPagosModalOpen ? 'border-green-400': ' hover:border-green-400'}  cursor-pointer w-fit `}>
        Pagos y Transferencias
      </li>
      <li className='py-3 hover:border-b-[3px] hover:border-green-400 cursor-pointer w-fit '>
        Solicitudes y Reclamaciones
      </li>
      <li className='py-3 hover:border-b-[3px] hover:border-green-400 cursor-pointer w-fit '>
        Ofertas
      </li>
    </ul>
  );
};

export default NavbarUl;