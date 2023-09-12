import { AiOutlineMenu } from 'react-icons/ai';
import { FiSettings, FiUser } from 'react-icons/fi';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import MobileOptionsbtn from '../navbar/MobileOptionsbtn';

const MobileOptionsSection = () => {
  return (
    <>
      <button
        type="button"
        className="mobile__options__menu__icon__container text-white hover:bg-gray-200 
          hover:text-gray-600 w-9 h-9 px-2 py-1 shadow-lg flex justify-center items-center rounded-full">
        <AiOutlineMenu className="mobile__options__menu__icon  text-2xl font-semibold" />
      </button>
        
      <div className="flex justify-end w-full gap-x-4">
        <MobileOptionsbtn icon={<FiUser className="text-gray-600 text-xl font-semibold" />} />
        <MobileOptionsbtn icon={<FiSettings className="text-gray-600 text-xl font-semibold" />} />
        <MobileOptionsbtn icon={<FaArrowRightFromBracket className="text-red-600 text-xl text-opacity-70 font-semibold" />} />
      </div>
    </>
  );
};

export default MobileOptionsSection;