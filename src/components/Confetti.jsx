import { useEffect, useState } from 'react';
import './Confetti.css';

function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    // Color palette for confetti
    const colors = [
      '#ff6b9d', // Pink
      '#c44569', // Deep pink
      '#f39c12', // Orange
      '#3498db', // Blue
      '#9b59b6', // Purple
      '#e74c3c', // Red
      '#2ecc71', // Green
      '#f1c40f', // Yellow
      '#1abc9c', // Turquoise
      '#e67e22', // Dark orange
    ];

    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
      size: 8 + Math.random() * 8,
      rotation: Math.random() * 360,
      type: Math.random() > 0.5 ? 'circle' : 'square',
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={`confetti-piece ${piece.type}`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
            background: piece.color,
            boxShadow: `0 0 10px ${piece.color}80, 0 0 20px ${piece.color}40`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
