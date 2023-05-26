import React from 'react';
import { Avatar, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

import styles from '../../styles/Body.module.css';

const URL = '../../../images/LockerDoor.jpg';

function Body() {
  return (
    <div className={`Body-Container ${styles.body_container}`}>
      <div className={`First-Block ${styles.body_fisrt_block}`}>
        <div className={`First-Block-Text ${styles.body_fisrt_block_text}`}>
          <p>
            URGENCIAS LAS 24 HORAS <br />
            <span className={styles.span}>+ 54 9 2234476914 </span>
          </p>
          <Button
            style={{
              backgroundColor: '#ffe408',
              color: '#000000',
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
      <div className={`Second-Block ${styles.body_second_block}`}>
        <div className={`Second-Block-Text ${styles.body_second_block_text}`}>
          <Avatar
            size="small"
            src={<img alt="avatar" src={URL} />}
            style={{ marginRight: '30px' }}
          />
          <div>
            <li>Blindamos puertas en 12 horas.</li>
            <li>Apertura y arreglo de puertas pentágono. </li>
            <li>Nivelación y regulación de puertas blindex. </li>
            <li>Arreglo de puertas ventana de aluminio, ventanas y cortinas</li>
            <li>Ajuste y regulación de cierra puertas de piso y aereos.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
