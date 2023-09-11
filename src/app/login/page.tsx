
import Image from 'next/image';


import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <section className="w-screen h-screen relative">
      <Image
        className="w-full z-10 h-full object-cover"
        src="/background-login.webp"
        width={700}
        height={700}
        alt="bg"
      />
      <div className="absolute z-40 w-full h-full top-0">
        <div className="w-full h-full flex flex-col  sm:justify-center sm:m-0 items-center ">
          <div className="w-[90%] login__container xs:mt-40 sm:mt-0 bg-body p-10 rounded-xl shadow-lg">
            <div className="flex items-center w-full justify-center mb-4">
              <Link href="/">
                <Image
                  className="w-28 md:w-36"
                  src={'/bhd_logo.png'}
                  width={150}
                  height={150}
                  alt=" logo"
                />
              </Link>
            </div>
            <div>
              <LoginForm />
            </div>

          </div>
          <Link href='/' className='flex w-full justify-center items-center mt-5 hover:underline decoration-white cursor-pointer'>
            <FaArrowLeftLong className='text-white text-2xl me-2' />
            <span className='text-white text-lg'>Ir al inicio</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;