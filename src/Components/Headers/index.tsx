import React from 'react';
import { Layout } from 'antd';

import styles from '../../styles/Header.module.css';
import NavTabs from './Components/NavTabs';

const { Header } = Layout;

function Headers() {
  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: '#FFE408',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      <div className={styles.name_logo_container}>
        <div className={styles.header_container_body_name}>
          <h1 className={styles.name_logo_typography}>REYMENDEZ SEGURIDAD</h1>
        </div>
        <div className={styles.header_container_body}>
          <NavTabs />
        </div>
        <div className={styles.header_container_body}>
          <p>+ 54 9 223 4476914</p>
        </div>
      </div>
    </Header>
  );
}

export default Headers;
