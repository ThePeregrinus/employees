import { Card, Form, Row, Space, Typography } from 'antd';

import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/custom_input';
import { PasswordInput } from '../../components/password_input';
import { CustomButton } from '../../components/custom_button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Register = () => {
  return (
    <Layout>
      <Row align="top" justify="center">
        <Card title="Регистрация" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput name="email" type="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              <Link to={Paths.login}>Уже есть аккаунт? </Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
