import { OtherSectionsBurble, SearchInput } from '@/components';
import { HomeNavbar, SwiperFullScreen } from '@/ui';
import { TbCalculator, TbPhoneCall } from 'react-icons/tb';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';

export default function Home() {
  const canales = [
    {
      icon: <TbPhoneCall className='text-5xl text-primary canales_container-item-icon' />,
      text: 'Canales de Contacto',
      link: '/canales-contacto',
    },
    {
      icon: (
        <LiaMoneyCheckAltSolid className='text-5xl text-primary canales_container-item-icon' />
      ),
      text: 'Canales de Remesas',
      link: '/canales-remesas',
    },
    {
      icon: (
        <TbCalculator className='text-5xl text-primary canales_container-item-icon' />
      ),
      text: 'Calculadora',
      link: '/calculadora',
    },
  ];
  return (
    
    <>

      <header className="w-screen">
        <HomeNavbar />
      </header>
      <main className="flex min-h-screen flex-col">
        <SwiperFullScreen />
    
        <section className="canales relative w-full h-56">
          <div
            className="canales__search__input w-full flex justify-center absolute 
           top-0 left-0 transform -translate-y-11 z-50"
          >
            <SearchInput />
          </div>
          <div className="canales__container mt-10 sm:mt-16 flex justify-center flex-wrap gap-x-16 sm:gap-x-10 gap-y-8">
            {canales.map((canal, index) => (
              <OtherSectionsBurble key={canal.link} text={canal.text}>
                {canal.icon}
              </OtherSectionsBurble>
            ))}
          </div>
        </section>
    
        <section className="recomendaciones"></section>
        <section className="noticias"></section>
      </main>
    </>
  );
}
