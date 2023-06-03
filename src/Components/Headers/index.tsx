/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

import styles2 from '../../styles/MobileMenu.module.css';

const MobileMenu = dynamic(() => import('./Components/MobileMenu'), {
  ssr: false,
});
const DesktopMenu = dynamic(() => import('./Components/DesktopMenu'), {
  ssr: false,
});

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function Headers({ open, setOpen }: Props) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const showDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(false);
  }, []);

  return isBigScreen ? (
    <DesktopMenu />
  ) : (
    <div className="containerIcon">
      <div className={styles2.header_container_body_name}>
        <h1 className={styles2.name_logo_typography}>REYMENDEZ SEGURIDAD</h1>
      </div>
      <div
        aria-hidden="true"
        className={`${styles2.btn} ${
          open ? styles2.active : styles2.notActive
        }`}
        onClick={showDrawer}
      >
        <span className={styles2.span} />
        <span className={styles2.span} />
        <span className={styles2.span} />
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default memo(Headers);
