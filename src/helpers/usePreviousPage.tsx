'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const usePreviousPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      //@ts-ignore
      let previousPages = JSON.parse(localStorage.getItem('previousPages')) || [];

      const currentUrl = window.location.href;

      // Eğer önceki sayfa yoksa veya mevcut sayfa önceki sayfaya eşit değilse ekle
      if (previousPages.length === 0 || previousPages[previousPages.length - 1] !== currentUrl) {
        previousPages.push(currentUrl);
      }
      localStorage.setItem('previousPages', JSON.stringify(previousPages));
    };

    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, [pathname]);
};

export default usePreviousPage;
