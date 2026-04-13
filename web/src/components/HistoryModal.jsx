import React from 'react';
import HistoryMetricChart from './HistoryMetricChart';
import DraggableWindow from './DraggableWindow';

const HistoryModal = ({ selectedMetric, history, onClose }) => {
  if (!selectedMetric) return null;

  return (
    <DraggableWindow 
      title={`${selectedMetric.title} HUB_TRACER_V4`} 
      onClose={onClose}
      initialPos={{ x: window.innerWidth / 2 - 275, y: 100 }}
      width="550px"
    >
      <HistoryMetricChart 
        data={history[selectedMetric.id]} 
        title={selectedMetric.title}
        unit={selectedMetric.unit}
        color={selectedMetric.color}
      />
      <div className="modal-footer text-mono">
        SYS_TRACER_V4.0 // PUFFER_GRÖSSE: 20 // STREAM_STATUS: OK
      </div>
    </DraggableWindow>
  );
};

export default HistoryModal;
