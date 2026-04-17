import React from 'react';
import Sidebar from './Sidebar';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Reporte Mensual</h1>
            <p className={styles.pageSubtitle}>Marketing Digital - Abril 2026</p>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>NA</div>
            <span>Natalia Armijo</span>
          </div>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
