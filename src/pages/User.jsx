import React from 'react';
import RadarEcharts from '../components/RadarEcharts';
import RadarAntv from '../components/RadarAntv';

const User = () => (
  <div style={{ padding: 24 }}>
    <h2>用户</h2>
    <div style={{ display: 'flex', gap: 32 }}>
      <RadarEcharts />
      <RadarAntv />
    </div>
  </div>
);

export default User; 