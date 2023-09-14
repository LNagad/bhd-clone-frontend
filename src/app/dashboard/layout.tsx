import {
  MobileOptionsSection,
  NavbarHeader,
  NavbarUl,
  NavbarWelcoming,
  PagosTransferenciaModal,
} from './components';


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  
  return (
    <>
      <header>
        <nav className="w-full">
          <div className="w-full px-2 sm:px-10 bg-neutral-100 flex flex-col">
            <div className="w-full flex py-4 justify-between">
              <NavbarHeader />
              <NavbarWelcoming />
            </div>
          </div>
          <div className="w-full hidden sm:flex px-10 bg-gray-800">
            <NavbarUl />
          </div>
          <div className="mobile__options__section w-full sm:hidden  bg-gray-800 px-2 py-3 flex justify-between">
            <MobileOptionsSection />
          </div>
          <div className='w-full'>
            <PagosTransferenciaModal  />
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
