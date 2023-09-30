import { Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};

export const passwordInput = ({ name, placeholder, dependencies }: Props) => {
  return (
    <FormItem
      name={name}
      dependencies={dependencies}
      hasFeedback={true}
      rules={[{ required: true, message: 'обязательное поле' }, ({getFieldValue}=>({
        validator
      }))]}
    >
      <Input.Password placeholder={placeholder} size="large"></Input.Password>
    </FormItem>
  );
};
