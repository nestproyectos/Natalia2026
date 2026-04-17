'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import styles from './ChartCard.module.css';

const data = [
  { name: 'Meta Ads', Inversion: 4000, Leads: 2400 },
  { name: 'Google Ads', Inversion: 3000, Leads: 1398 },
  { name: 'Inmuebles24', Inversion: 2000, Leads: 980 },
  { name: 'Tiktok', Inversion: 2780, Leads: 3908 },
];

const customTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#0B0F19', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px' }}>
        <p style={{ color: '#fff', margin: '0 0 8px 0', fontWeight: 'bold' }}>{label}</p>
        <p style={{ color: '#6366f1', margin: 0 }}>Inversión: ${payload[0].value}</p>
        <p style={{ color: '#8b5cf6', margin: 0 }}>Leads: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

export default function CampaignPerformance() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Rendimiento por Canal</h3>
          <p className={styles.subtitle}>Inversión vs Leads Generados</p>
        </div>
      </div>
      <div className={styles.content}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} tickLine={false} axisLine={false} />
            <YAxis yAxisId="left" orientation="left" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} tickLine={false} axisLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} tickLine={false} axisLine={false} />
            <Tooltip content={customTooltip} cursor={{fill: 'rgba(255,255,255,0.02)'}} />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="Inversion" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="Leads" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
