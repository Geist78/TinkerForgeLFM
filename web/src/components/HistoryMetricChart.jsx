import React, { useState, useRef } from 'react';

const HistoryMetricChart = ({ data, title, unit, color }) => {
  const [hoverData, setHoverData] = useState(null);
  const svgRef = useRef(null);

  if (!data || data.length === 0) return null;

  const width = 600;
  const height = 250;
  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 40;
  const paddingBottom = 40;

  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const range = maxVal - minVal || 1;

  const points = data.map((val, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * (width - paddingLeft - paddingRight);
    const y = height - paddingBottom - ((val - minVal) / range) * (height - paddingTop - paddingBottom);
    return `${x},${y}`;
  }).join(' ');

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const CTM = svgRef.current.getScreenCTM();
    const x = (e.clientX - CTM.e) / CTM.a;
    
    const chartWidth = width - paddingLeft - paddingRight;
    const progress = (x - paddingLeft) / chartWidth;
    const index = Math.round(progress * (data.length - 1));

    if (index >= 0 && index < data.length) {
      const valX = paddingLeft + (index / (data.length - 1)) * chartWidth;
      const valY = height - paddingBottom - ((data[index] - minVal) / range) * (height - paddingTop - paddingBottom);
      setHoverData({ value: data[index], x: valX, y: valY, index });
    }
  };

  const handleMouseLeave = () => setHoverData(null);

  return (
    <div className="history-chart-container">
      <div className="history-header">
        <span className="heading-accent">{title}-VERLAUF</span>
        <span className="text-mono" style={{ color }}>{data[data.length - 1].toFixed(1)}{unit}</span>
      </div>

      <svg 
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`} 
        className="history-svg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <text x={paddingLeft - 10} y={paddingTop} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end" className="text-mono">
          {maxVal.toFixed(1)}{unit}
        </text>
        <text x={paddingLeft - 10} y={height - paddingBottom} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end" className="text-mono">
          {minVal.toFixed(1)}{unit}
        </text>

        <line x1={paddingLeft} y1={height - paddingBottom} x2={width - paddingRight} y2={height - paddingBottom} stroke="rgba(255,255,255,0.1)" />
        <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={height - paddingBottom} stroke="rgba(255,255,255,0.1)" />
        
        <polyline fill="none" stroke={color} strokeWidth="2.5" points={points} strokeLinejoin="round" strokeLinecap="round" />
        <polyline fill="none" stroke={color} strokeWidth="8" points={points} strokeLinejoin="round" strokeLinecap="round" style={{ filter: 'blur(10px)', opacity: 0.2 }} />

        {hoverData && (
          <g>
            <line x1={hoverData.x} y1={paddingTop} x2={hoverData.x} y2={height - paddingBottom} stroke="rgba(255,255,255,0.2)" strokeDasharray="4" />
            <circle cx={hoverData.x} cy={hoverData.y} r="5" fill={color} />
            <rect x={hoverData.x - 30} y={hoverData.y - 35} width="60" height="25" rx="2" fill="var(--bg-color)" stroke={color} strokeWidth="1" />
            <text x={hoverData.x} y={hoverData.y - 18} fill="white" fontSize="12" textAnchor="middle" className="text-mono">
              {hoverData.value.toFixed(1)}{unit}
            </text>
          </g>
        )}
      </svg>

      <div className="history-stats">
        <div className="stat-node">
          <span className="label">MIN</span>
          <span className="text-mono">{minVal.toFixed(1)}</span>
        </div>
        <div className="stat-node">
          <span className="label">MAX</span>
          <span className="text-mono">{maxVal.toFixed(1)}</span>
        </div>
        <div className="stat-node">
          <span className="label">DURCHSCHN.</span>
          <span className="text-mono">{(data.reduce((a, b) => a + b, 0) / data.length).toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryMetricChart;
