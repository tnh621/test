import React from 'react';
import BranchCourseTrackAntd from '../components/BranchCourseTrackAntd';
import GaugeEcharts from '../components/GaugeEcharts';

const Branch = () => (
  <div style={{ padding: 24, display: 'flex', gap: 32 }}>
    <div>
      <h3>Ant Design 仪表盘</h3>
      <BranchCourseTrackAntd />
    </div>
    <div>
      <h3>Echarts 仪表盘</h3>
      <GaugeEcharts />
    </div>
  </div>
);

export default Branch; 