import React from 'react';
import { Card, List } from 'antd';

const courses = [
  '新员工入职培训！！！',
  '开发工程师入职培训！！！',
  '公司安全门户网站使用注意事项！！！',
  '新员工关于公司安全纪律注意事项！！！',
  '新员工关于公司安全纪律注意事项！！！',
];

const CourseList = () => (
  <Card title="课程管理">
    <List
      size="small"
      dataSource={courses}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </Card>
);

export default CourseList;