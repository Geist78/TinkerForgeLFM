import React, { useState, useRef, useEffect } from 'react';

const DraggableWindow = ({ title, children, onClose, initialPos = { x: 100, y: 100 }, width = "600px" }) => {
  const [position, setPosition] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const nextX = e.clientX - dragStart.x;
      const nextY = e.clientY - dragStart.y;
      
      // Keep within viewport (optional but recommended)
      const maxX = window.innerWidth - (windowRef.current?.offsetWidth || 0);
      const maxY = window.innerHeight - (windowRef.current?.offsetHeight || 0);
      
      setPosition({
        x: Math.max(0, Math.min(nextX, maxX)),
        y: Math.max(0, Math.min(nextY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div 
      ref={windowRef}
      className={`draggable-window ${isDragging ? 'dragging' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: width,
        position: 'fixed',
        zIndex: 2000
      }}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <div className="header-decoration" />
        <span className="window-title heading-accent">{title}</span>
        <button className="window-close text-mono" onClick={onClose}>[X]</button>
      </div>
      <div className="window-content-wrapper">
         {children}
      </div>
    </div>
  );
};

export default DraggableWindow;
