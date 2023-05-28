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
      <h1>PIDE UN PRESUPUESTO!</h1>
      <Form
        autoComplete="off"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Nombre" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Asunto" name="issue">
          <Input />
        </Form.Item>

        <Form.Item label="Mensaje" name="Text">
          <Input.TextArea />
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
