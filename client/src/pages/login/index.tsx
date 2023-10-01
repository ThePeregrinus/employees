import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Row, Space, Typography } from 'antd';

import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/custom_input';
import { PasswordInput } from '../../components/password_input';
import { CustomButton } from '../../components/custom_button';
import { ErrorMessage } from '../../components/error_message';

import { Paths } from '../../paths';
import { UserData, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils';

export const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState('');

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap;
    } catch (error) {
      const maybeError = isErrorWithMessage(error);

      if (maybeError) {
        setError(error.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

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
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
