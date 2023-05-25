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

  return (
    <div className={styles.box}>
      <div className="NavBar-Container">
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
        <Drawer onClose={onClose} open={open} placement="right" width="30%">
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
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileMenu;
