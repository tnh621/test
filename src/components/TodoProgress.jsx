import React from 'react';
import { Card, Progress } from 'antd';

const todos = [
  { title: '待办事项1', percent: 60 },
  { title: '待办事项2', percent: 40 },
  { title: '待办事项3', percent: 80 },
];

const TodoProgress = () => (
  <Card title="待办事项">
    {todos.map((item, idx) => (
      <div key={idx} style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 4 }}>{item.title}</div>
        <Progress percent={item.percent} showInfo={false} strokeColor="#2d3cff" />
      </div>
    ))}
  </Card>
);

export default TodoProgress;