'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './ChartCard.module.css';

const data = [
  { name: 'S1', leads: 400, citas: 240, cierres: 24 },
  { name: 'S2', leads: 300, citas: 139, cierres: 22 },
  { name: 'S3', leads: 200, citas: 480, cierres: 22 },
  { name: 'S4', leads: 278, citas: 390, cierres: 20 },
];

export default function LeadFunnelChart() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Embudo de Conversión Semanal</h3>
          <p className={styles.subtitle}>Leads vs Citas vs Cierres</p>
        </div>
      </div>
      <div className={styles.content}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCitas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0B0F19', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
            <Area type="monotone" dataKey="citas" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCitas)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
