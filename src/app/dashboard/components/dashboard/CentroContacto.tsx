import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const CentroContacto = () => {
  return (
    <>
      <section className='bg-white p-4 shadow-sm w-full rounded-md flex flex-col gap-y-8'>
        <h6 className='text-lg text-gray-500 font-medium text-opacity-75'>Centro de contacto</h6>
        <BsTelephone className='text-7xl font-bold text-green-700 text-center w-full' />
        <div>
          <p className='text-gray-400 font-semibold text-xs text-opacity-95 break-all'>servicioalcliente@bhd.com.do</p>
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
    </>
  );
};

export default CentroContacto;