import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  ApartmentOutlined,
  BranchesOutlined,
  FileTextOutlined,
  StarOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const items = [
  { key: '1', icon: <HomeOutlined />, label: '首页' },
  { key: '2', icon: <UserOutlined />, label: '用户' },
  { key: '3', icon: <BookOutlined />, label: '培训中心' },
  { key: '4', icon: <ApartmentOutlined />, label: '组织架构' },
  { key: '5', icon: <BranchesOutlined />, label: '分支' },
  { key: '6', icon: <FileTextOutlined />, label: '报告' },
  { key: '7', icon: <StarOutlined />, label: '收藏' },
  { key: '8', icon: <SettingOutlined />, label: '账户设置' },
];

const SidebarMenu = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
);

export default SidebarMenu; 