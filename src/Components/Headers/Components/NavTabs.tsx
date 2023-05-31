import React, { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

const MobileMenu = dynamic(() => import('./components/MobileMenu'), {
  ssr: false,
});
const DesktopMenu = dynamic(() => import('./components/DesktopMenu'), {
  ssr: false,
});
type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function NavTabs({ open, setOpen }: Props) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return isBigScreen ? (
    <DesktopMenu />
  ) : (
    <MobileMenu open={open} setOpen={setOpen} />
  );
}

export default memo(NavTabs);
