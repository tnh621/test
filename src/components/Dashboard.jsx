import React from 'react';
import { Row, Col } from 'antd';
import WelcomeCard from './WelcomeCard';
import TodoProgress from './TodoProgress';
import CourseList from './CourseList';
import TaskStatistics from './TaskStatistics';
import EmployeeList from './EmployeeList';
import CalendarPanel from './CalendarPanel';

const Dashboard = () => (
  <div>
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={24}>
        <WelcomeCard />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <TodoProgress />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <CourseList />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <EmployeeList />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <TaskStatistics />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <CalendarPanel />
      </Col>
    </Row>
  </div>
);

export default Dashboard; 