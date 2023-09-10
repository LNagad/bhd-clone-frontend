import { HomeNavbar, NotFoundSVG } from '@/ui';

export default function NotFoundPage() {
  return (
    <>
      <header className="w-screen">
        <HomeNavbar />
      </header>
      <div className='flex justify-center relative'>
        <NotFoundSVG className="w-full md:w-[50%] md:absolute md:-top-16" />
      </div>
    </>
  );
}
