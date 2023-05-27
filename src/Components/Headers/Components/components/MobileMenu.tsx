import React from 'react';
import { Drawer } from 'antd';

import styles from '../../../../styles/MobileMenu.module.css';

function MobileMenu() {
  const [open, setOpen] = React.useState<boolean>(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(!open);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    padding: 48,
    overflow: 'hidden',
    textAlign: 'center',
    background: 'transparent',
    top: '13vw',
    left: '-466.4px',
    width: '99.8vw',
    height: '100vh',
    border: 'none',
    visibility: open ? 'visible' : 'hidden',
  };

  return (
    <div className={styles.box}>
      <div className="NavBar">
        <div className="containerIcon">
          <div
            aria-hidden="true"
            className={`${styles.btn} ${
              open ? styles.active : styles.notActive
            }`}
            onClick={showDrawer}
          >
            <span className={styles.span} />
            <span className={styles.span} />
            <span className={styles.span} />
          </div>
        </div>
      </div>
      <div className="NavBar-Container" style={containerStyle}>
        <Drawer
          closable={false}
          getContainer={false}
          onClose={onClose}
          open={open}
          placement="right"
          width="45%"
        >
          <div className={styles.actions}>
            <a className={styles.actions_fonts} href="#Home" onClick={onClose}>
              Inicio
            </a>
            <a
              className={styles.actions_fonts}
              href="#Services"
              onClick={onClose}
            >
              Servicios
            </a>
            <a
              className={styles.actions_fonts}
              href="#WhoWeAre"
              onClick={onClose}
            >
              Quienes Somos
            </a>
            <a
              className={styles.actions_fonts}
              href="#ContactUs"
              onClick={onClose}
            >
              Contacto
            </a>
            <p>+ 54 9 223 4476914</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileMenu;
