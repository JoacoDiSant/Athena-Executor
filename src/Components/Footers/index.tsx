/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { Form, Input, Button, Alert, Space } from 'antd';
import emailjs from '@emailjs/browser';

import styles from '../../styles/Footer.module.css';

interface IForm {
  name: string;
  email: string;
  issue: string;
  text: string;
}

function Footer() {
  const [form] = Form.useForm();
  const [onSuccess, setOnSuccess] = React.useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PUBLICK_KEY as string;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templeteId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;

  const sendEmail = (e: IForm) => {
    emailjs
      .send(
        serviceId,
        templeteId,
        {
          from_name: e.name,
          to_name: 'Reymendez Seguridad',
          from_email: e.email,
          from_issue: e.issue,
          message: e.text,
        },
        publicKey,
      )
      .then(
        () => {
          setOnSuccess(true);
          form.resetFields();
        },
        () => setOnSuccess(false),
      );
  };

  return (
    <div className={styles.footer_container}>
      <h1 className={styles.title}>PIDE UN PRESUPUESTO!</h1>
      <Form
        form={form}
        onFinish={sendEmail}
        style={{
          maxWidth: 600,
          color: 'white',
          width: '100%',
        }}
      >
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Nombre" />
        </Form.Item>

        <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="issue" rules={[{ required: true }]}>
          <Input placeholder="Asunto" />
        </Form.Item>

        <Form.Item name="text" rules={[{ required: true }]}>
          <Input.TextArea placeholder="Mensaje" />
        </Form.Item>

        <Form.Item
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          wrapperCol={{ offset: 1, span: 1 }}
        >
          <Button htmlType="submit" type="primary">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      {onSuccess ? (
        <Space direction="vertical">
          <Alert
            message="Se envio el mail exitosamente"
            type="success"
            showIcon
          />
        </Space>
      ) : (
        onSuccess && (
          <Space direction="vertical">
            <Alert message="Error al enviar el Mail" type="error" showIcon />
          </Space>
        )
      )}
    </div>
  );
}

export default Footer;
