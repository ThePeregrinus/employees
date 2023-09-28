import { Layout, Space, Typography, Button } from 'antd';
import styles from './index.module.css';
import { TeamOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcons} />
        <Button type="link"> Click </Button>
      </Space>
    </Layout.Header>
  );
};
