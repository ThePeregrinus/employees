import { Card, Form, Row, Space, Typography } from 'antd';

import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/custom_input';
import { PasswordInput } from '../../components/password_input';
import { CustomButton } from '../../components/custom_button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Login = () => {
  return (
    <Layout>
      <Row align="top" justify="center">
        <Card title="Вход" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <CustomInput name="email" placeholder="Email" type="email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              <Link to={Paths.register}>Нет аккаунта? </Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
