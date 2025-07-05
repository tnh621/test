import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card } from 'antd';

const total = 563;
const finished = 87;
const percent = Math.round((finished / total) * 100);

const option = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: total,
      splitNumber: 3,
      axisLine: {
        lineStyle: {
          width: 16,
          color: [
            [finished / total, '#2d3cff'],
            [(finished + 200) / total, '#bfcaff'],
            [1, '#e5e6eb']
          ]
        }
      },
      pointer: {
        show: false
      },
      progress: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
        offsetCenter: [0, '-10%'],
        fontSize: 32,
        fontWeight: 700,
        color: '#222',
      },
      data: [
        {
          value: finished
        }
      ]
    }
  ]
};

const GaugeEcharts = () => (
  <Card title={<span><span style={{color:'#6d7cff',fontWeight:600}}>&#9679;</span> 课程跟踪</span>} bordered={false} style={{ width: 300 }}>
    <div style={{ position: 'relative', height: 180, marginBottom: 8 }}>
      <ReactECharts option={option} style={{ height: 180 }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -40%)',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{ fontSize: 32, fontWeight: 700 }}>{finished}</div>
        <div style={{ fontSize: 14, color: '#999' }}>/ {total}</div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 8 }}>
      <span><span style={{ color: '#2d3cff', fontWeight: 700 }}>&#9679;</span> 已完成</span>
      <span><span style={{ color: '#bfcaff', fontWeight: 700 }}>&#9679;</span> 进行中</span>
      <span><span style={{ color: '#e5e6eb', fontWeight: 700 }}>&#9679;</span> 未开始</span>
    </div>
  </Card>
);

export default GaugeEcharts; 