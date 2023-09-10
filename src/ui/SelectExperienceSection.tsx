'use client';

import { useEffect, useState } from 'react';
import { SelectExperienceColapse } from '.';

import SelectExperienceNoColapse from './SelectExperienceNoColapse';

const SelectExperienceSection = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.matchMedia('(min-width: 768px)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (isMediumScreen) return <SelectExperienceNoColapse />;
  else return <SelectExperienceColapse />;
};

export default SelectExperienceSection;
