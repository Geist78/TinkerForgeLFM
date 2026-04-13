import React, { useState, useEffect } from 'react';

const AggregatedLoadWave = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setPhase(p => p + 0.009);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const generatePath = (offset, amplitude, frequency) => {
    let points = [];
    const width = 1440;
    const height = 120;
    const segments = 100;

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const y = 60 + Math.sin((i / segments) * Math.PI * frequency + phase + offset) * amplitude;
      points.push(`${x},${y}`);
    }

    return `M0,${height} L0,60 ` + points.map(p => `L${p}`).join(' ') + ` L${width},${height} Z`;
  };

  const generateLinePath = (offset, amplitude, frequency) => {
    let points = [];
    const width = 1440;
    const segments = 100;

    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const y = 60 + Math.sin((i / segments) * Math.PI * frequency + phase + offset) * amplitude;
      points.push(`${x},${y}`);
    }

    return `M${points[0]} ` + points.slice(1).map(p => `L${p}`).join(' ');
  };

  return (
    <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Background Fill Wave */}
      <path d={generatePath(0, 30, 4)} fill="url(#wave-gradient)" />

      {/* Primary Line */}
      <path
        d={generateLinePath(0, 30, 4)}
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth="1.5"
        strokeDasharray="5 3"
        opacity="0.6"
      />

      {/* Secondary Sub-Wave Line */}
      <path
        d={generateLinePath(Math.PI, 15, 6)}
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Moving Data Points */}
      <circle
        cx={720 + Math.sin(phase * 0.5) * 200}
        cy={60 + Math.sin((0.5 + Math.sin(phase * 0.5) * 0.2) * Math.PI * 4 + phase) * 30}
        r="3"
        fill="var(--accent-primary)"
      />
    </svg>
  );
};

export default AggregatedLoadWave;
