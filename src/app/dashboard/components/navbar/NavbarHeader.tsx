import Link from 'next/link';
import Image from 'next/image';

const NavbarHeader = () => {
  return (
    <div>
      <Link
        href="/dashboard"
        className="flex text-green-600 font-semibold italic items-center gap-x-3"
      >
        <Image
          className="w-full xs:w-20 md:w-32"
          src={'/bhd_logo.png'}
          width={100}
          height={0}
          alt=" logo"
        />
        <span className="font-normal leading-10 text-gray-400 not-italic opacity-40">
        |
        </span>
      Personal
      </Link>
    </div>
  );
};

export default NavbarHeader;