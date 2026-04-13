import React from 'react';
import DraggableWindow from './DraggableWindow';

const AccessLogModal = ({ logs, onClose }) => {
  if (!logs) return null;

  return (
    <DraggableWindow 
      title="HAUPTPROTOKOLL_MASTER_V2" 
      onClose={onClose}
      initialPos={{ x: window.innerWidth / 2 - 300, y: 150 }}
      width="600px"
    >
      <div className="log-container">
        <div className="log-header" style={{ border: 'none', padding: 0 }}>
          <div className="log-meta text-mono" style={{ fontSize: '0.6rem' }}>
            EINTRÄGE_GESAMT: {logs.length} | STATUS: AKTIV
          </div>
        </div>

        <div className="log-scroll-area">
          <table className="log-table text-mono">
            <thead>
              <tr>
                <th style={{ fontSize: '0.65rem' }}>ZEIT</th>
                <th style={{ fontSize: '0.65rem' }}>ID</th>
                <th style={{ fontSize: '0.65rem' }}>ERGEBNIS</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} className={`log-row ${log.status}`}>
                  <td style={{ fontSize: '0.7rem' }}>{log.time}</td>
                  <td style={{ fontSize: '0.7rem' }}>{log.user}</td>
                  <td className="status-cell" style={{ fontSize: '0.7rem' }}>{log.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal-footer text-mono">
        SEC_AUDIT_LOG_V2 // ENDE
      </div>
    </DraggableWindow>
  );
};

export default AccessLogModal;
