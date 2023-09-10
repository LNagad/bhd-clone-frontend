'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ResponsiveContextType {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
  showCollapse: boolean;
  handleShowCollapse: () => void;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

interface Props {
    children: ReactNode | ReactNode[];
}

export const ResponsiveContextProvider = ({ children } : Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);

  const handleShowCollapse = () => {
    setShowCollapse((p) => !p);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 600px)').matches);
      setIsMediumScreen(
        window.matchMedia('(min-width: 768px) and (max-width: 960px)').matches
      );
      setIsLargeScreen(window.matchMedia('(min-width: 961px)').matches);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider 
      value={{ isSmallScreen, isMediumScreen, isLargeScreen, showCollapse, handleShowCollapse  }}>
      {children}
    </ResponsiveContext.Provider>
  );

};

export const useResponsiveContext = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsiveContext debe ser usado dentro de un ResponsiveContextProvider');
  }
  return context;
};