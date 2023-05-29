/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Input, Button } from 'antd';

import styles from '../../styles/Footer.module.css';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function Footer() {
  return (
    <div className={styles.footer_container}>
      <h1 className={styles.title}>PIDE UN PRESUPUESTO!</h1>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600, color: 'white' }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name="name">
          <Input placeholder="Nombre" />
        </Form.Item>

        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="issue">
          <Input placeholder="Asunto" />
        </Form.Item>

        <Form.Item name="Text">
          <Input.TextArea placeholder="Mensaje" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Footer;
