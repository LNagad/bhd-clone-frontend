import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa6';


const DivisaSwipper = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={10}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      navigation={true}
      loop={true}
      className="w-full h-full divisar__swiper"
    >
      <SwiperSlide>
        <div className='flex justify-center gap-x-8 items-center w-full h-full'>
          <div className='flex flex-col text-gray-950 font-semibold'>
            <p className='text-lg'>55.<span className='text-sm'>05</span></p>
            <p className='text-xs'>Compra Dólar</p>
          </div>
          <FaDollarSign className='text-4xl text-primary' />
          <div className='flex flex-col text-gray-950 font-semibold'>
            <p className='text-lg'>56.<span className='text-sm'>95</span></p>
            <p className='text-xs'>Venta Dólar</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex justify-center gap-x-8 items-center w-full h-full'>
          <div className='flex flex-col text-gray-950 font-semibold'>
            <p className='text-lg'>60.<span className='text-sm'>05</span></p>
            <p className='text-xs'>Compra Euros</p>
          </div>
          <FaEuroSign className='text-4xl text-sky-600' />
          <div className='flex flex-col text-gray-950 font-semibold'>
            <p className='text-lg'>63.<span className='text-sm'>30</span></p>
            <p className='text-xs'>Venta Euros</p>
          </div>
        </div>
      </SwiperSlide>

  
    </Swiper>
  );
};

export default DivisaSwipper;