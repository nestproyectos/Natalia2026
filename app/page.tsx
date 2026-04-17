import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import KpiCard from '../components/KpiCard';
import LeadFunnelChart from '../components/LeadFunnelChart';
import CampaignPerformance from '../components/CampaignPerformance';
import { BadgeDollarSign, Users, MousePointerClick, Percent } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <DashboardLayout>
      <div className={styles.dashboardGrid}>
        
        {/* KPIs */}
        <section className={styles.kpiSection}>
          <KpiCard 
            title="Total Invertido" 
            value="$125,000" 
            trend={12.5} 
            icon={<BadgeDollarSign size={20} />} 
          />
          <KpiCard 
            title="Leads Generados" 
            value="1,248" 
            trend={8.2} 
            icon={<Users size={20} />} 
          />
          <KpiCard 
            title="Costo por Lead (CPL)" 
            value="$100.16" 
            trend={-5.4} 
            icon={<MousePointerClick size={20} />} 
            trendLabel="Mejorado vs mes anterior"
          />
          <KpiCard 
            title="CTR General" 
            value="3.2%" 
            trend={1.1} 
            icon={<Percent size={20} />} 
          />
        </section>

        {/* Charts */}
        <section className={styles.chartsSection}>
          <LeadFunnelChart />
          <CampaignPerformance />
        </section>
        
      </div>
    </DashboardLayout>
  );
}
