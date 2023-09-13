import Link from 'next/link';
import { AiOutlineDollar } from 'react-icons/ai';
import { TbBulb, TbLocationDollar } from 'react-icons/tb';
import './styles.css';

const AccesosRapidos = () => {
  return (
    <>
      <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Accesos rapidos</h6>
      <ul className='w-full flex flex-col gap-y-4'>
        <li className='acceso__rapido__li w-full'>
          <Link href='/dashboard' className='w-full flex gap-x-3 items-center'>
            <AiOutlineDollar className='acceso__rapido__li__icon' />
            <p className='acceso__rapido__li__text'>Transacciones entre mis productos</p>
          </Link>
        </li>
        <li className='acceso__rapido__li w-full '>
          <Link href='/dashboard' className='w-full flex gap-x-3 items-center'>
            <TbLocationDollar className='acceso__rapido__li__icon' />
            <p className='acceso__rapido__li__text'>Transferencia a otras cuentas</p>
          </Link>
        </li>
        <li className='acceso__rapido__li w-full'>
          <Link href='/dashboard' className='w-full flex gap-x-3 items-center'>
            <TbBulb className='acceso__rapido__li__icon ' />
            <p className='acceso__rapido__li__text'>Pago de servicios</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AccesosRapidos;