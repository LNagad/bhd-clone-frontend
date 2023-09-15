'use client';
import { useDashboardUIStore } from '@/store';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const PATH_NAMES = {
  dashboard: '/dashboard',
  transferencias: '/dashboard/transferencias'
};

const NavbarUl = () => {
  const { togglePagosModal, isPagosModalOpen } = useDashboardUIStore((state) => state);
  const pathname  = usePathname();
  const router = useRouter();

  return (
    <ul className='w-full text-white  font-medium text-opacity-95 text-sm flex gap-x-6'>
      <li
        onClick={ () => router.push(PATH_NAMES.dashboard) }
        className={`py-3 border-green-400 ${pathname === PATH_NAMES.dashboard  ? 'border-b-[3px]': 'hover:border-b-[3px]'}  cursor-pointer w-fit `}>
        Mis Productos
      </li>
      <li
        onMouseOver={() => togglePagosModal() }
        className={`py-3 border-green-400 ${isPagosModalOpen || pathname.includes(PATH_NAMES.transferencias.split('/')[2]) 
          ? 'border-b-[3px]': 'hover:border-b-[3px]'}  cursor-pointer w-fit `}>
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