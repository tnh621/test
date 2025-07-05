import React from 'react';
import { Card } from 'antd';
import { Radar } from '@ant-design/plots';

const data = [
  { name: '技能1', score: 4 },
  { name: '技能2', score: 6 },
  { name: '技能3', score: 3 },
  { name: '技能4', score: 2 },
  { name: '技能5', score: 7 },
  { name: '技能6', score: 5 },
];

const config = {
  data,
  xField: 'name',
  yField: 'score',
  seriesField: 'name',
  area: { style: { fill: 'rgba(56,120,255,0.2)' } },
  point: { size: 4, shape: 'circle', style: { fill: '#3878ff', stroke: '#3878ff', lineWidth: 1 } },
  lineStyle: { stroke: '#3878ff', lineWidth: 2 },
  smooth: true,
  radius: 0.8,
  legend: false,
  xAxis: { line: null, tickLine: null, grid: { line: { style: { stroke: '#e6e6e6' } } }, label: { style: { fill: '#999', fontSize: 12 } } },
  yAxis: { grid: { line: { style: { stroke: '#e6e6e6' } } }, label: null },
  tooltip: { showMarkers: false },
  height: 220,
};

const RadarAntv = () => (
  <Card title="分析报告 (AntV)">
    <div style={{ fontSize: 16, marginBottom: 8 }}>
      综合得分: <span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>7.3</span>
    </div>
    <Radar {...config} />
  </Card>
);

export default RadarAntv; 