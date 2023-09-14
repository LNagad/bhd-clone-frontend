import Link from 'next/link';

const SelectExperienceNoColapse = () => {
  const experienceMenuItems = [
    { name: 'Personal', link: '/' },
    { name: 'Pyme', link: '/pyme' },
    { name: 'Corporativa y Empresarial', link: '/empresa' },
  ];

  let location = '';

  if (typeof window === 'undefined'){
    location = '/';
  } else {
    location = window.location.pathname;
  }

  return (
    <div className="hidden sm:flex bg-white gap-x-3 px-6">
      {experienceMenuItems.map((item) => {
        const isSelected = item.link === location;
      
        return (
          <Link key={item.link} href={item.link}>
            <div
              className={`experience__item__div px-8 py-3 flex items-center gap-x-2 rounded-b-2xl
                ${isSelected? 'bg-primary-selected text-white': 'text-gray-500 hover:text-white hover:transition-all duration-700' }`}
            >
              <p className='uppercase font-medium text-xs'>
                {item.name}
              </p>
            </div>
          </Link>
        );
      }
      )}
    </div>
  );
};

export default SelectExperienceNoColapse;