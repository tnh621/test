import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import TaskStatistics from '../components/TaskStatistics';
import CourseList from '../components/CourseList';
import EmployeeList from '../components/EmployeeList';
import CalendarPanel from '../components/CalendarPanel';
import TodoProgress from '../components/TodoProgress';

const Dashboard = () => {
  return (
    <div style={{ padding: 24, background: '#f7f8fa', minHeight: '100vh' }}>
      <WelcomeCard />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.2fr',
          gap: 24,
          marginTop: 24,
        }}
      >
        {/* 左侧 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <TodoProgress />
          <TaskStatistics />
        </div>
        {/* 中间 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <CourseList />
          <CourseList />
        </div>
        {/* 右侧 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <EmployeeList />
          <CalendarPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 