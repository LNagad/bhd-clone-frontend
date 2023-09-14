import Link from 'next/link';
import Image from 'next/image';
import { BarsSVG } from './icons';
import SelectExperienceSection from './SelectExperienceSection';
import HomeLogin from './HomeLogin';


export const HomeNavbar = () => {
  
  return (
    <nav className="min-w-full flex flex-col md:flex-col-reverse md:mb-2">
      
      <section className="w-full flex justify-between p-5 sm:px-7 py-6 ">
        <div className="flex items-center md:hidden">
          <BarsSVG className="text-xl sm:text-3xl" fill="#8b8f8b" />
        </div>

        <div className="flex items-center w-[85%] justify-end md:justify-start m-0">
          <Link href="/">
            <Image
              className="w-28 md:w-36"
              src={'/bhd_logo.png'}
              width={100}
              height={0}
              alt=" logo"
            />
          </Link>

          <ul className='flex text-gray-700 justify-center w-full'>
            <li>
              <Link href="#">
                <p className="font-normal transition-all duration-500  hover:text-green-600 text-sm sm:text-base ml-5 md:ml-10">
                  Tu negocio
                </p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="font-normal transition-all duration-500  hover:text-green-600 text-sm sm:text-base ml-5 md:ml-10">
                  Gerencia
                </p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="font-normal transition-all duration-500  hover:text-green-600 text-sm sm:text-base ml-5 md:ml-10">
                  Empleados
                </p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="font-normal transition-all duration-500  hover:text-green-600 text-sm sm:text-base ml-5 md:ml-10">
                  Proveedores
                </p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="font-normal transition-all duration-500  hover:text-green-600 text-sm sm:text-base ml-5 md:ml-10">
                  Clientes
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <HomeLogin />
      </section>

      <section className="w-full bg-primary">
        <SelectExperienceSection />
      </section>
    </nav>
  );
};

export default HomeNavbar;
