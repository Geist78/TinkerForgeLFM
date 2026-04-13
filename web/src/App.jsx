import { useState, useEffect } from 'react';
import './App.css';
import BackgroundMograph from './components/BackgroundMograph';
import HistoryModal from './components/HistoryModal';
import AccessLogModal from './components/AccessLogModal';
import logoImg from './assets/Logo.png';
import AggregatedLoadWave from './components/AggregatedLoadWave';

function App() {
  const [metrics, setMetrics] = useState({
    serverTemp: 24,
    ambientTemp: 22,
    humidity: 45,
    powerDraw: 0.84,
  });

  const [history, setHistory] = useState({
    serverTemp: Array.from({ length: 20 }, () => 22 + Math.random() * 4),
    ambientTemp: Array.from({ length: 20 }, () => 20 + Math.random() * 3),
    humidity: Array.from({ length: 20 }, () => 40 + Math.random() * 10),
  });

  const [masterLogs] = useState([
    { time: '14:22:11', user: 'SYS_ADMIN (01)', action: 'Puffer Reset', result: 'GEWÄHRT', status: 'success' },
    { time: '14:18:05', user: 'ANONYMOUS_IP', action: 'SSH Setup', result: 'ABGEFANGEN', status: 'danger' },
    { time: '14:15:22', user: 'MAINT_BOT_2', action: 'Sektorscan', result: 'ERFOLGREICH', status: 'success' },
    { time: '14:10:01', user: 'UNKNOWN_USR', action: 'Portscan', result: 'BLOCKIERT', status: 'warning' },
    { time: '14:05:59', user: 'MAINT_BOT_2', action: 'Diagnose', result: 'ERFOLGREICH', status: 'success' },
    { time: '13:55:12', user: 'SYS_ADMIN (01)', action: 'Berechtigung', result: 'GEWÄHRT', status: 'success' },
    { time: '13:42:12', user: 'GHOST_ID', action: 'Dateizugriff', result: 'ABGELEHNT', status: 'danger' },
    { time: '13:30:45', user: 'BOT_AUTO_9', action: 'Knotensync', result: 'WIEDERHOLUNG', status: 'warning' },
    { time: '13:15:00', user: 'SYS_ADMIN (01)', action: 'Kernel Patch', result: 'GEWÄHRT', status: 'success' },
  ]);

  const [selectedMetric, setSelectedMetric] = useState(null);
  const [showLogModal, setShowLogModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const next = {
          serverTemp: Math.max(20, Math.min(30, prev.serverTemp + (Math.random() - 0.5))),
          ambientTemp: Math.max(18, Math.min(25, prev.ambientTemp + (Math.random() - 0.5) * 0.5)),
          humidity: Math.max(30, Math.min(60, prev.humidity + Math.floor((Math.random() - 0.5) * 2))),
          powerDraw: Number((0.8 + Math.random() * 0.1).toFixed(2)),
        };

        setHistory(h => ({
          serverTemp: [...h.serverTemp, next.serverTemp].slice(-20),
          ambientTemp: [...h.ambientTemp, next.ambientTemp].slice(-20),
          humidity: [...h.humidity, next.humidity].slice(-20),
        }));

        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openHistory = (id) => {
    const config = {
      serverTemp: { title: 'SERVER TEMPERATUR', unit: '°C', color: 'var(--accent-primary)' },
      ambientTemp: { title: 'RAUMTEMPERATUR', unit: '°C', color: 'var(--accent-primary)' },
      humidity: { title: 'LUFTFEUCHTIGKEIT', unit: '%', color: 'var(--accent-secondary)' },
    };
    setSelectedMetric({ id, ...config[id] });
  };

  return (
    <div className="dashboard">
      <BackgroundMograph />
      <div className="scan-bar" />

      <header className="dashboard-section header-section animate-left">
        <div className="env-logo-container">
          <img src={logoImg} alt="Logo" className="dashboard-logo" />
        </div>
      </header>

      <section className="dashboard-section left-metrics animate-left delay-1">
        <div className="metric-row clickable" onClick={() => openHistory('serverTemp')}>
          <div className="metric-header">
            <span className="label">SERVER TEMPERATUR</span>
            <div className="metric-value text-mono">
              {Math.round(metrics.serverTemp)}<span className="metric-unit">°C</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${(metrics.serverTemp / 40) * 100}%` }} />
          </div>
          <div className="metric-bounds">
            <span>UNTERGRENZE: 18°C</span>
            <span>OBERGRENZE: 35°C</span>
          </div>
        </div>

        <div className="metric-row clickable" onClick={() => openHistory('ambientTemp')}>
          <div className="metric-header">
            <span className="label">RAUMTEMPERATUR</span>
            <div className="metric-value text-mono">
              {Math.round(metrics.ambientTemp)}<span className="metric-unit">°C</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${(metrics.ambientTemp / 35) * 100}%`, height: '4px' }} />
          </div>
        </div>

        <div className="metric-row clickable" onClick={() => openHistory('humidity')}>
          <div className="metric-header">
            <span className="label">LUFTFEUCHTIGKEIT</span>
            <div className="metric-value text-mono" style={{ color: 'var(--accent-secondary)' }}>
              {metrics.humidity}<span className="metric-unit">%</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${metrics.humidity}%`,
                backgroundColor: 'var(--accent-secondary)',
                boxShadow: '0 0 15px var(--accent-secondary)'
              }}
            />
          </div>
          <div className="metric-bounds">
            <span style={{ color: 'var(--accent-secondary)' }}>KRITISCHER BEREICH: &gt;60%</span>
          </div>
        </div>
      </section>

      <section className="dashboard-section power-section animate-left delay-2">
        <div className="metric-header">
          <span className="label">STROMVERBRAUCH</span>
          <span className="text-mono" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{metrics.powerDraw} kW</span>
        </div>
        <div className="power-chart">
          {[40, 60, 50, 80, 100, 70, 50, 60].map((h, i) => (
            <div
              key={i}
              className={`bar ${i === 4 ? 'active' : ''}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </section>

      <div className="dashboard-section rack-info-box heading-accent animate-top delay-3">
        <div className="rack-row" style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>
          <span>RACK_ID:</span>
          <span>ALPHA_01</span>
        </div>
        <div className="rack-row">
          <span>SEKTOR:</span>
          <span>HUB_WEST</span>
        </div>
        <div className="rack-row" style={{ marginBottom: '2px' }}>
          <span>BETRIEBSZEIT:</span>
          <span>144:12:09</span>
        </div>
      </div>

      <aside className="dashboard-section right-panel animate-right delay-1">
        <div className="access-header clickable" onClick={() => setShowLogModal(true)}>
          <span className="label heading-accent">ZUGRIFFSKONTROLLE</span>
          <div className="live-indicator text-mono">AKTIV</div>
        </div>

        <div className="counters">
          <div className="counter-item auth">
            <span className="label">AUTORISIERT</span>
            <div className="counter-value text-mono">1.204</div>
          </div>
          <div className="counter-item unauth">
            <span className="label">UNBEFUGT</span>
            <div className="counter-value text-mono" style={{ color: 'var(--accent-secondary)' }}>
              003
            </div>
          </div>
        </div>

        <div className="logs-section">
          {masterLogs.slice(0, 3).map((log, i) => (
            <div key={i} className="log-item">
              <div className="log-led" style={{ background: log.status === 'danger' ? 'var(--danger)' : log.status === 'warning' ? 'var(--accent-secondary)' : 'var(--accent-primary)' }} />
              <div className="log-content">
                <span className="log-title heading-accent">{log.user}</span>
                <span className="log-text">{log.action}: {log.result}</span>
                <span className="log-time text-mono">{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>


      <footer className="wave-container animate-bottom delay-3">
        <span className="wave-label-left label heading-accent">GESAMTSYSTEMLAST</span>
        <span className="wave-label-right text-mono">MAX: 92.4% | DURCHSCHN.: 41.1%</span>
        <AggregatedLoadWave />
      </footer>

      <HistoryModal selectedMetric={selectedMetric} history={history} onClose={() => setSelectedMetric(null)} />
      {showLogModal && <AccessLogModal logs={masterLogs} onClose={() => setShowLogModal(false)} />}
    </div>
  );
}

export default App;
