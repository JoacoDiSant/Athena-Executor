import React from 'react';
import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

import styles from '../../styles/Body.module.css';

function Body() {
  return (
    <div className={`Body-Container ${styles.body_container}`}>
      <div className={`First-Block ${styles.body_first_block}`}>
        <div className={`First-Block-Text ${styles.body_fisrt_block_text}`}>
          <p>
            URGENCIAS LAS 24 HORAS <br />
            <span className={styles.span}>+ 54 9 2234476914 </span>
          </p>
          <div
            style={{
              position: 'relative',
            }}
          >
            <Button
              style={{
                backgroundColor: '#ffe408',
                color: '#000000',
                fontFamily: 'Agrandir-Wide',
              }}
            >
              <PhoneOutlined
                style={{
                  transform: 'rotate(90deg)',
                  marginRight: '15px',
                }}
              />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
      <div className={`Second-Block ${styles.body_second_block}`}>
        <div className={`First-Text ${styles.body_second_block_text}`}>
          <div className={`Second Text ${styles.body_first_text}`}>
            <span className={styles.image1} />
            <div className={styles.textLi}>
              <li>Blindamos puertas en 12 horas.</li>
              <li>Apertura y arreglo de puertas pentágono. </li>
              <li>Nivelación y regulación de puertas blindex. </li>
              <li>
                Arreglo de puertas ventana de aluminio, ventanas y cortinas
              </li>
              <li>Ajuste y regulación de cierra puertas de piso y aereos.</li>
            </div>
          </div>
          <div className={`Second Text ${styles.body_second_text}`}>
            <span className={styles.image2} />
            <div className={styles.textLi}>
              <li>Instalación y apertura de cajas fuerte.</li>
            </div>
          </div>
          <div className={`Third Text ${styles.body_third_text}`}>
            <span className={styles.image3} />
            <div className={styles.textLi}>
              <li>
                Instalación de controles de acceso, con microllavero de
                proximidad.
              </li>
              <li>Cerraduras electrónicas.</li>
              <li>Cerraduras con cilindros computados.</li>
              <li>Cerraduras doble paleta.</li>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`Third-Block-container ${styles.body_Third_block_container}`}
      >
        <div className={`Third-Block ${styles.body_Third_block}`}>
          <div className={`Third-Block-Text ${styles.body_Third_block_text}`}>
            <h1
              style={{
                fontSize: '30px',
              }}
            >
              QUIENES SOMOS?
            </h1>
            <p
              style={{
                fontSize: '14px',
              }}
            >
              Mi nombre es Tomás Rey Mendez, soy Cerrajero particular con
              disponibilidad de 24hs de servicio los 7 días de la semana.
              <br />
              Atendemos domicilios particulares, comercios, administraciones e
              inmobiliarias.
              <br />
              Nuestro enfoque es cumplir en tiempo y forma los trabajos,
              brindando el mejor servicio a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      <div className={`Four-Block ${styles.body_four_block}`}>
        <div className={`Four-Block-Text ${styles.body_four_block_text}`}>
          <div>
            <h1
              style={{
                fontSize: '16px',
                paddingLeft: '12px',
              }}
            >
              CONTACTO 24/7
            </h1>
          </div>
          <div className={styles.div_container_p}>
            <span>
              <p className={`${styles.p} ${styles.title}`}>TELÉFONO 24/7</p>
              <br />
              <p className={styles.p}>+ 54 9 2234476914</p>
              <br />
              <p className={`${styles.p} ${styles.title}`}> EMAIL</p>
              <br />
              <p className={styles.p}>REYMENDEZSEGURIDAD@GMAIL.COM</p>
              <br />
              <p className={`${styles.p} ${styles.title}`}>ÁREAS DE SERVICIO</p>
              <br />
              <p className={styles.p}>
                Mar del Plata, Buenos Aires, Argentina.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
