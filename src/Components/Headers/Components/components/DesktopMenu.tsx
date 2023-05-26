import React from 'react';

import styles from '../../../../styles/DesktopMenu.module.css';

function DesktopMenu() {
  return (
    <div className={styles.actions}>
      <a className={styles.actions_fonts} href="#Home">
        Inicio
      </a>
      <a className={styles.actions_fonts} href="#Services">
        Servicios
      </a>
      <a className={styles.actions_fonts} href="#WhoWeAre">
        Quienes Somos
      </a>
      <a className={styles.actions_fonts} href="#ContactUs">
        Contacto
      </a>
      <div className={styles.header_container_body}>
        <p>+ 54 9 223 4476914</p>
      </div>
    </div>
  );
}

export default DesktopMenu;
