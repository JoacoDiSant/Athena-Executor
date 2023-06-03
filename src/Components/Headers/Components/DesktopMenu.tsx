import React from 'react';

import styles from '../../../styles/Header.module.css';

function DesktopMenu() {
  return (
    <div className={styles.name_logo_container}>
      <div className={styles.header_container_body_name}>
        <h1 className={styles.name_logo_typography}>REYMENDEZ SEGURIDAD</h1>
      </div>

      <div className={styles.actions}>
        <a className={styles.actions_fonts} href="#home">
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
        <p>+ 54 9 223 4476914</p>
      </div>
    </div>
  );
}

export default DesktopMenu;
