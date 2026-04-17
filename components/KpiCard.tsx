import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import styles from './KpiCard.module.css';

interface KpiCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ReactNode;
  trendLabel?: string;
}

export default function KpiCard({ title, value, trend, icon, trendLabel = "vs mes anterior" }: KpiCardProps) {
  const isPositive = trend >= 0;
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.iconWrapper}>{icon}</div>
      </div>
      <div className={styles.value}>{value}</div>
      <div className={styles.footer}>
        <div className={`${styles.trend} ${isPositive ? styles.positive : styles.negative}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{Math.abs(trend)}%</span>
        </div>
        <span className={styles.trendLabel}>{trendLabel}</span>
      </div>
    </div>
  );
}
