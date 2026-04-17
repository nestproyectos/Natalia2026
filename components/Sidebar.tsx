import React from 'react';
import { LayoutDashboard, Users, TrendingUp, DollarSign, Settings, Bell, Search, BarChart3 } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <LayoutDashboard size={24} color="#6366f1" />
        </div>
        <span className={styles.logoText}>NEST Analytics</span>
      </div>

      <div className={styles.navGroup}>
        <h3 className={styles.navGroupTitle}>Principal</h3>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <BarChart3 size={20} />
            Estatus Comercial
          </a>
          <a href="#" className={styles.navItem}>
            <TrendingUp size={20} />
            Desempeño de Campañas
          </a>
          <a href="#" className={styles.navItem}>
            <Users size={20} />
            Embudo de Leads
          </a>
          <a href="#" className={styles.navItem}>
            <DollarSign size={20} />
            ROI & Costos
          </a>
        </nav>
      </div>

      <div className={styles.navGroup}>
        <h3 className={styles.navGroupTitle}>Configuración</h3>
        <nav className={styles.nav}>
          <a href="#" className={styles.navItem}>
            <Bell size={20} />
            Notificaciones
          </a>
          <a href="#" className={styles.navItem}>
            <Settings size={20} />
            Ajustes
          </a>
        </nav>
      </div>
      
      <div className={styles.upgradeCard}>
        <h4>Nuevo Proyecto</h4>
        <p>Configura un nuevo desarrollo para rastrearlo.</p>
        <button className={styles.primaryBtn}>Añadir Proyecto</button>
      </div>
    </aside>
  );
}
