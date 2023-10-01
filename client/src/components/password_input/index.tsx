import { Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};

export const PasswordInput = ({ name, placeholder, dependencies }: Props) => {
  return (
    <FormItem
      name={name}
      dependencies={dependencies}
      hasFeedback={true}
      rules={[
        { required: true, message: 'обязательное поле' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (name === 'confirmPassword') {
              if (value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли должны совпадать'));
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error('Пароль должен иметь больше шести символов')
                );
              }
              Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large"></Input.Password>
    </FormItem>
  );
};
