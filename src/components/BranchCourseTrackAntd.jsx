import React from 'react';
import { Card, Progress } from 'antd';

const BranchCourseTrackAntd = () => {
  // 数据
  const total = 563;
  const finished = 87;
  const percent = Math.round((finished / total) * 100);

  return (
    <Card title={<span><span style={{color:'#6d7cff',fontWeight:600}}>●</span> 课程跟踪</span>} bordered={false} style={{ width: 300 }}>
      <div style={{ position: 'relative', height: 180, marginBottom: 8 }}>
        <Progress
          type="dashboard"
          percent={percent}
          gapDegree={180}
          gapPosition="bottom"
          strokeColor={['#2d3cff', '#bfcaff', '#e5e6eb']}
          trailColor="#e5e6eb"
          strokeWidth={16}
          style={{ width: 180, transform: 'rotate(-90deg)' }}
          format={() => null}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -40%)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{finished}</div>
          <div style={{ fontSize: 14, color: '#999' }}>/ {total}</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 8 }}>
        <span><span style={{ color: '#2d3cff', fontWeight: 700 }}>●</span> 已完成</span>
        <span><span style={{ color: '#bfcaff', fontWeight: 700 }}>●</span> 进行中</span>
        <span><span style={{ color: '#e5e6eb', fontWeight: 700 }}>●</span> 未开始</span>
      </div>
    </Card>
  );
};

export default BranchCourseTrackAntd; 