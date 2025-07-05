import React from 'react';
import { Card, Progress } from 'antd';

const TaskStatistics = () => (
  <Card title="任务统计" style={{ textAlign: 'center' }}>
    <Progress type="circle" percent={40} strokeColor={{ '0%': '#2d3cff', '100%': '#ffb300' }} />
    <div style={{ marginTop: 16, fontSize: 16 }}>40%</div>
  </Card>
);

export default TaskStatistics;