import { useState, useEffect } from 'react';

export const useDimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height:null,  
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width:innerWidth, height:innerHeight });
    const handleResize = e => {
      const {innerWidth, innerHeight} = e.target;
      setDimensions({ width:innerWidth, height:innerHeight });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return demensions;
};