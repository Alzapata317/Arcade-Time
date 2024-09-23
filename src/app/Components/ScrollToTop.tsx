'use client'; // Required for client-side hooks like useEffect

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Runs whenever the path changes

  return null;
};

export default ScrollToTop;