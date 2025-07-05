import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card } from 'antd';

const data = [
  { name: '技能1', value: 4 },
  { name: '技能2', value: 6 },
  { name: '技能3', value: 3 },
  { name: '技能4', value: 2 },
  { name: '技能5', value: 7 },
  { name: '技能6', value: 5 },
];

const option = {
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      // params.value 是当前点所有维度的值，params.dimensionIndex 是当前维度索引
      // params.dimensionNames 是所有维度名
      if (params.dimensionIndex !== undefined) {
        const skillName = data[params.dimensionIndex].name;
        const skillValue = params.value[params.dimensionIndex];
        return `${skillName}：${skillValue}`;
      }
      // 兼容性兜底
      return '';
    }
  },
  radar: {
    indicator: data.map(item => ({ name: item.name, max: 10 })),
    radius: 100,
    splitNumber: 5,
    axisName: { color: '#999', fontSize: 14 },
    splitLine: { lineStyle: { color: '#e6e6e6' } },
    splitArea: { areaStyle: { color: ['#fff', '#f7f8fa'] } },
    axisLine: { lineStyle: { color: '#e6e6e6' } },
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: data.map(item => item.value),
        areaStyle: { color: 'rgba(56, 120, 255, 0.2)' },
        lineStyle: { color: '#3878ff' },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { color: '#3878ff' },
      },
    ],
  }],
};

const RadarEcharts = () => (
  <Card title="分析报告 (ECharts)">
    <div style={{ fontSize: 16, marginBottom: 8 }}>
      综合得分: <span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>7.3</span>
    </div>
    <ReactECharts option={option} style={{ height: 320 }} />
  </Card>
);

export default RadarEcharts; 