import React from 'react';
import { Form, Input, Button, Alert, Space } from 'antd';
import emailjs from '@emailjs/browser';

import styles from '../../styles/Footer.module.css';

interface IParamsForm {
  name: string;
  email: string;
  issue: string;
  text: string;
}

function Footer() {
  const [onSuccess, setOnSuccess] = React.useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PUBLICK_KEY as string;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templeteId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;

  const sendEmail = (e: any) => {
    console.log('👽 ~ e:', e);
    e.preventDefault();
    emailjs
      .send(
        serviceId,
        templeteId,
        {
          name: e.currentTarget.name,
          email: e.currentTarget.email,
          issue: e.currentTarget.issue,
          text: e.currentTarget.text,
        },
        publicKey,
      )
      .then(
        () => setOnSuccess(true),
        () => setOnSuccess(false),
      );
  };
  return (
    <div className={styles.footer_container}>
      <h1 className={styles.title}>PIDE UN PRESUPUESTO!</h1>
      <form
        name="form_submit"
        onSubmit={sendEmail}
        style={{ maxWidth: 600, color: 'white' }}
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

        <Form.Item name="text">
          <Input.TextArea placeholder="Mensaje" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </form>
      {onSuccess ? (
        <Space direction="vertical">
          <Alert
            message="Se envio el mail exitosamente"
            type="success"
            showIcon
          />
        </Space>
      ) : (
        <Space direction="vertical">
          <Alert message="Error al enviar el Mail" type="error" showIcon />
        </Space>
      )}
    </div>
  );
}

export default Footer;
