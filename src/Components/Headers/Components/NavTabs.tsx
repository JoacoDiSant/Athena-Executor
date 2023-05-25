import React, { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

const MobileMenu = dynamic(() => import('./components/MobileMenu'), {
  ssr: false,
});
const DesktopMenu = dynamic(() => import('./components/DesktopMenu'), {
  ssr: false,
});

function NavTabs() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return isBigScreen ? <DesktopMenu /> : <MobileMenu />;
}

export default memo(NavTabs);
