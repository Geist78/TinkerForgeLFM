import { useState, useEffect } from 'react';
import './App.css';
import BackgroundMograph from './components/BackgroundMograph';
import HistoryModal from './components/HistoryModal';
import AccessLogModal from './components/AccessLogModal';
import logoImg from './assets/Logo.png';
import AggregatedLoadWave from './components/AggregatedLoadWave';

const LIVE_DATA_API_URL = import.meta.env.VITE_LIVE_DATA_API_URL || 'http://localhost:3001/api/live-data';

function App() {
  const [metrics, setMetrics] = useState({
    ambientTemp: null,
    humidity: null,
    lightLevel: null,
    powerDraw: null,
  });

  const [history, setHistory] = useState({
    ambientTemp: [],
    humidity: [],
    lightLevel: [],
  });

  const [masterLogs, setMasterLogs] = useState([]);

  const [selectedMetric, setSelectedMetric] = useState(null);
  const [showLogModal, setShowLogModal] = useState(false);
  const [accessStatus, setAccessStatus] = useState({
    isAdminLoggedIn: false,
    lastLoginAt: null,
    lastCardId: '-',
    lastCardRole: 'Unbekannter Benutzer'
  });

  useEffect(() => {
    let isMounted = true;

    const loadLiveData = async () => {
      try {
        const response = await fetch(LIVE_DATA_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const liveData = await response.json();
        const next = {
          ambientTemp: liveData.temperature ?? null,
          humidity: liveData.humidity ?? null,
          lightLevel: liveData.light ?? null,
          powerDraw: liveData.powerDraw ?? null
        };

        if (!isMounted) return;

        setMetrics(next);
        setAccessStatus({
          isAdminLoggedIn: Boolean(liveData.access?.isAdminLoggedIn),
          lastLoginAt: liveData.access?.lastLoginAt ?? null,
          lastCardId: liveData.access?.lastCardId ?? '-',
          lastCardRole: liveData.access?.lastCardRole ?? 'Unbekannter Benutzer'
        });
        setMasterLogs(Array.isArray(liveData.accessLogs) ? liveData.accessLogs : []);
        setHistory(h => ({
          ambientTemp: next.ambientTemp === null ? h.ambientTemp : [...h.ambientTemp, next.ambientTemp].slice(-20),
          humidity: next.humidity === null ? h.humidity : [...h.humidity, next.humidity].slice(-20),
          lightLevel: next.lightLevel === null ? h.lightLevel : [...h.lightLevel, next.lightLevel].slice(-20)
        }));
      } catch (error) {
        console.error('Fehler beim Laden der Live-Daten:', error);
      }
    };

    loadLiveData();
    const interval = setInterval(loadLiveData, 3000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const openHistory = (id) => {
    const config = {
      ambientTemp: { title: 'RAUMTEMPERATUR', unit: '°C', color: 'var(--accent-primary)' },
      humidity: { title: 'LUFTFEUCHTIGKEIT', unit: '%', color: 'var(--accent-secondary)' },
      lightLevel: { title: 'LICHT LEVEL', unit: ' Lux', color: 'var(--accent-primary)' },
    };
    setSelectedMetric({ id, ...config[id] });
  };

  const lastLoginText = accessStatus.lastLoginAt
    ? new Date(accessStatus.lastLoginAt).toLocaleString('de-DE')
    : 'Noch kein Login';

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
        <div className="metric-row clickable" onClick={() => openHistory('lightLevel')}>
          <div className="metric-header">
            <span className="label">LICHT LEVEL</span>
            <div className="metric-value text-mono">
              {metrics.lightLevel === null ? '-' : Math.round(metrics.lightLevel)}<span className="metric-unit"> Lux</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${Math.min(100, ((metrics.lightLevel ?? 0) / 400) * 100)}%` }} />
          </div>
          <div className="metric-bounds">
            <span>UNTERGRENZE: 0 Lux</span>
            <span>OBERGRENZE: 400 Lux</span>
          </div>
        </div>

        <div className="metric-row clickable" onClick={() => openHistory('ambientTemp')}>
          <div className="metric-header">
            <span className="label">RAUMTEMPERATUR</span>
            <div className="metric-value text-mono">
              {metrics.ambientTemp === null ? '-' : Math.round(metrics.ambientTemp)}<span className="metric-unit">°C</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${((metrics.ambientTemp ?? 0) / 35) * 100}%`, height: '4px' }} />
          </div>
        </div>

        <div className="metric-row clickable" onClick={() => openHistory('humidity')}>
          <div className="metric-header">
            <span className="label">LUFTFEUCHTIGKEIT</span>
            <div className="metric-value text-mono" style={{ color: 'var(--accent-secondary)' }}>
              {metrics.humidity === null ? '-' : metrics.humidity}<span className="metric-unit">%</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${metrics.humidity ?? 0}%`,
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
          <span className="text-mono" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>
            {metrics.powerDraw === null ? '-' : `${metrics.powerDraw} kW`}
          </span>
        </div>
        <div className="power-chart">
          {[0, 0, 0, 0, 0, 0, 0, 0].map((h, i) => (
            <div
              key={i}
              className="bar"
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
          <div className="live-indicator text-mono">{accessStatus.isAdminLoggedIn ? 'ADMIN ONLINE' : 'UNBEKANNTER BENUTZER'}</div>
        </div>

        <div className="counters">
          <div className="counter-item auth">
            <span className="label">ADMIN STATUS</span>
            <div className="counter-value text-mono">{accessStatus.isAdminLoggedIn ? 'JA' : 'NEIN'}</div>
          </div>
          <div className="counter-item unauth">
            <span className="label">LETZTE KARTE</span>
            <div className="counter-value text-mono" style={{ color: 'var(--accent-secondary)' }}>
              {accessStatus.lastCardRole}
            </div>
          </div>
        </div>

        <div className="rack-row" style={{ marginBottom: '8px' }}>
          <span>LETZTER LOGIN:</span>
          <span className="text-mono">{lastLoginText}</span>
        </div>
        <div className="rack-row" style={{ marginBottom: '8px' }}>
          <span>KARTEN-ID:</span>
          <span className="text-mono">{accessStatus.lastCardId}</span>
        </div>

        <div className="logs-section">
          {masterLogs.slice(0, 3).map((log, i) => (
            <div key={i} className="log-item">
              <div className="log-led" style={{ background: log.status === 'danger' ? 'var(--danger)' : 'var(--accent-primary)' }} />
              <div className="log-content">
                <span className="log-title heading-accent">{log.user}</span>
                <span className="log-text">{log.action}: {log.result}</span>
                <span className="log-time text-mono">{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>


      

      <HistoryModal selectedMetric={selectedMetric} history={history} onClose={() => setSelectedMetric(null)} />
      {showLogModal && <AccessLogModal logs={masterLogs} onClose={() => setShowLogModal(false)} />}
    </div>
  );
}

export default App;
