import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">切换角色</Menu.Item>
    <Menu.Item key="2">个人信息</Menu.Item>
    <Menu.Item key="3">退出</Menu.Item>
  </Menu>
);

const HeaderBar = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
    <Dropdown overlay={menu} placement="bottomRight">
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Avatar src="https://randomuser.me/api/portraits/men/41.jpg" />
        <span style={{ marginLeft: 8 }}>Jinny</span>
        <span style={{ color: '#888', marginLeft: 8, fontSize: 12 }}>UI Engineer</span>
      </div>
    </Dropdown>
  </div>
);

export default HeaderBar; 