'use client';

import Link from 'next/link';
import { AiOutlineDollar } from 'react-icons/ai';
import { TbBulb, TbLocationDollar } from 'react-icons/tb';
import './styles.css';
import { useDashboardUIStore } from '@/store';

interface Props {
  noShowTitle?: boolean;
  bigTexts?: boolean;
}

const AccesosRapidos = ( { noShowTitle, bigTexts } : Props) => {

  //TODO: need to toggle modal if click on a link
  //?info: will need to change the modal logic for that
  
  const { togglePagosModal, isPagosModalOpen } = useDashboardUIStore((state) => state);
  console.log(isPagosModalOpen);
  const togglePagosModalIfOpen = () => {
    if (isPagosModalOpen) {
      togglePagosModal();
    }
  };

  return (
    <>
      {!noShowTitle && (
        <h6 className="text-lg text-gray-500 font-medium text-opacity-75">
          Accesos rápidos
        </h6>
      )}
      <ul className="w-full flex flex-col gap-y-4">
        <li className="acceso__rapido__li w-full">
          <Link
            // onClick={togglePagosModalIfOpen}
            href="#"
            className={`w-full flex ${
              bigTexts ? 'gap-x-1' : 'gap-x-3'
            } items-center`}
          >
            <AiOutlineDollar
              className={`acceso__rapido__li__icon  ${
                bigTexts ? 'text-3xl text-gray-700' : 'text-2xl text-gray-500'
              }  text-opacity-75`}
            />
            <p
              className={`acceso__rapido__li__text ${
                bigTexts
                  ? 'text-[16px] font-normal text-black '
                  : 'text-sm font-medium text-gray-600'
              }`}
            >
              Transacciones entre mis productos
            </p>
          </Link>
        </li>
        <li className="acceso__rapido__li w-full ">
          <Link
            // onClick={togglePagosModalIfOpen}
            href="/dashboard/transferencias"
            className={`w-full flex ${
              bigTexts ? 'gap-x-1' : 'gap-x-3'
            } items-center`}
          >
            <TbLocationDollar
              className={`acceso__rapido__li__icon  ${
                bigTexts ? 'text-3xl text-gray-700' : 'text-2xl'
              } text-gray-500  text-opacity-75`}
            />
            <p
              className={`acceso__rapido__li__text ${
                bigTexts
                  ? 'text-[16px] font-normal text-black break-all'
                  : 'text-sm font-medium text-gray-600'
              }`}
            >
              Transferencia a otras cuentas
            </p>
          </Link>
        </li>
        <li className="acceso__rapido__li w-full">
          <Link
            href="#"
            className={`w-full flex ${
              bigTexts ? 'gap-x-1' : 'gap-x-3'
            } items-center`}
          >
            <TbBulb
              className={`acceso__rapido__li__icon ${
                bigTexts ? 'text-3xl text-gray-700 ' : 'text-2xl text-gray-500'
              } text-opacity-75 `}
            />
            <p
              className={`acceso__rapido__li__text ${
                bigTexts
                  ? 'text-[16px] font-normal text-black '
                  : 'text-sm font-medium text-gray-600'
              }`}
            >
              Pago de servicios
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AccesosRapidos;