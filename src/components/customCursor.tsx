import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Follower */}
      <div
        className={`fixed pointer-events-none hidden md:flex transition-transform duration-1000 ease-out rounded-full bg-gray-100`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
          width: '30px',
          height: '30px',
          zIndex: 999,
          marginTop: '-1.4%',
          marginLeft: '-0.9%',
          transition: 'transform 1.5s ease-out, background-color 0.5s ease-out', // Slow follower movement (1 second)
          backdropFilter: 'blur(0.2px)', // Glassy blur effect
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background for glassy effect
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for 3D effect
        }}
      >
      </div>
    </>
  );
};

export default CursorFollower;
