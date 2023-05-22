import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function Headers() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="logo" />
      <h1>hola?</h1>
    </Header>
  );
}

export default Headers;
