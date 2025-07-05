import React from 'react';
import { Card, List, Avatar, Button } from 'antd';

const employees = [
  { name: 'Jinny', role: 'UI Engineer', date: '2025-06-20', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'Jinny', role: 'UI Engineer', date: '2025-06-20', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'Jinny', role: 'UI Engineer', date: '2025-06-20', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
];

const EmployeeList = () => (
  <Card
    title="待入职员工"
    extra={<Button size="small" type="primary">批量发送</Button>}
  >
    <List
      itemLayout="horizontal"
      dataSource={employees}
      renderItem={item => (
        <List.Item>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
              <Avatar src={item.avatar} />
              <div style={{ marginLeft: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span style={{ fontWeight: 600 }}>{item.name}</span>
                <span style={{ color: '#aaa', fontSize: 12, marginLeft: 6 }}>{item.role}</span>
              </div>
            </div>
            <div style={{ color: '#888', fontSize: 14, marginLeft: 12, whiteSpace: 'nowrap' }}>{item.date}</div>
          </div>
        </List.Item>
      )}
    />
  </Card>
);

export default EmployeeList;