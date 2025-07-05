import React from 'react';
import { Card } from 'antd';

const WelcomeCard = () => (
  <Card
    style={{
      background: 'linear-gradient(90deg, #6db3f2 0%, #1e69de 100%)',
      color: '#fff',
      minHeight: 120,
      borderRadius: 12,
      backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    bodyStyle={{ padding: 32 }}
  >
    <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Good Morning</div>
    <div style={{ fontSize: 16, opacity: 0.9, marginBottom: 4 }}>
      "An employee's experience is the sum of all interactions they have with the organization."
    </div>
    <div style={{ fontSize: 14, opacity: 0.8 }}>- MATT MULLENWEG</div>
  </Card>
);

export default WelcomeCard;