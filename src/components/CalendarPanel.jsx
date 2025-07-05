import React, { useState } from 'react';
import { Card, Calendar, Badge, List, Button, Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const listData = (value) => {
  if (value.date() === 17) {
    return [
      { type: 'success', content: '开发工程师入职培训！！！' },
      { type: 'error', content: '安全培训！！！' },
    ];
  }
  if (value.date() === 20) {
    return [
      { type: 'success', content: '月度总结会议' },
    ];
  }
  return [];
};

const CalendarPanel = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [curValue, setCurValue] = useState(dayjs());
  const events = selectedDate ? listData(selectedDate) : [];

  // 年份选项生成
  const yearOptions = [];
  for (let y = 2010; y <= 2030; y++) {
    yearOptions.push(<Select.Option key={y} value={y}>{y}年</Select.Option>);
  }

  // 自定义头部
  const headerRender = ({ value, onChange }) => {
    if (!value) return null;
    const curMonth = value.month() + 1;
    const curYear = value.year();
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
        <Button
          size="small"
          icon={<LeftOutlined />}
          style={{ marginRight: 8 }}
          onClick={() => onChange(value.clone().subtract(1, 'month'))}
        />
        <Select
          size="small"
          value={curYear}
          style={{ width: 90, marginRight: 8 }}
          onChange={y => onChange(value.clone().year(y))}
        >
          {yearOptions}
        </Select>
        <span style={{ fontWeight: 500, fontSize: 16 }}>{curMonth}月</span>
        <Button
          size="small"
          icon={<RightOutlined />}
          style={{ marginLeft: 8 }}
          onClick={() => onChange(value.clone().add(1, 'month'))}
        />
      </div>
    );
  };

  return (
    <Card title="日历">
      <div className="calendar-panel-bg" style={{ width: 260, margin: '0 auto' }}>
        <Calendar
          fullscreen={false}
          onSelect={setSelectedDate}
          onPanelChange={setCurValue}
          headerRender={headerRender}
        />
      </div>
      <div style={{ marginTop: 16 }} className="calendar-event-detail">
        <h4>事件详情</h4>
        {selectedDate ? (
          events.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={events}
              renderItem={item => (
                <List.Item>
                  <Badge status={item.type} text={item.content} />
                </List.Item>
              )}
            />
          ) : (
            <div>该日期暂无事件</div>
          )
        ) : (
          <div>请选择日期查看事件</div>
        )}
      </div>
    </Card>
  );
};

export default CalendarPanel;