// src/components/RainOfEmojis/RainOfEmojis.tsx
import React, { useEffect } from 'react';
import './RainOfEmojis.css';

const RainOfEmojis: React.FC = () => {
  useEffect(() => {
    const emojiContainer = document.getElementById('emoji-container');
    const emojis = ['💰', '💄', '💅', '️💫']; // Money bag and lipstick emojis

    const createEmoji = () => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      emoji.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
      emojiContainer?.appendChild(emoji);

      // Remove emoji after animation
      setTimeout(() => {
        emoji.remove();
      }, 5000); // Match with animation duration
    };

    // Create emojis at intervals
    const interval = setInterval(createEmoji, 300); // Adjust frequency of falling emojis

    return () => clearInterval(interval);
  }, []);

  return <div id="emoji-container" className="emoji-container"></div>;
};

export default RainOfEmojis;
