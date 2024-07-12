'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Nav from './Nav';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const GlobalStyles = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'NeonRetroDemoVersionRegular';
      src: url('${basePath}/assets/fonts/NeonRetro-DemoVersion-Regular.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'NeonSans';
      src: url('${basePath}/assets/fonts/NeonSans.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
    }
  `}</style>
);

export const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Any necessary effect when the path changes
  }, [pathname]);

  return (
    <>
        <GlobalStyles />
        <Nav />
        <div className="mt-[12vh] lm-lg:mt-[20vh]">
            {children}
        </div>
    </>
  );
};