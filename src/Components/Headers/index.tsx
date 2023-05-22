import React from 'react';
import { Layout } from 'antd';

import styles from '../../styles/Header.module.css';

const { Header } = Layout;

function Headers() {
  return (
    <Header style={{ padding: 0, backgroundColor: 'rgb(255,222,17)' }}>
      <div className={styles.name_logo_container}>
        <h1 className={styles.name_logo_typography}>REYMENDEZ SEGURIDAD</h1>
      </div>
    </Header>
  );
}

export default Headers;
