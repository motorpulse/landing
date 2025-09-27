'use client';

import { useEffect, useState } from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
export const useScrollTreshhold = () => {
  const [scroll, setScroll] = useState(0);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return scroll;
};
