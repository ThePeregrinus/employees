import React from 'react';
import { Card, Form, Row } from 'antd';

import { Layout } from '../../components/layout';

export const Login = () => {
  return (
    <Layout>
      <Row align="top" justify="center">
        <Card title="Войдите" style={{ width: '30rem' }}>
          <Form onFinish={() => null}></Form>
        </Card>
      </Row>
    </Layout>
  );
};
