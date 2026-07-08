import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  loop?: boolean;
  loopDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 75,
  className = '',
  onComplete,
  loop = true,
  loopDelay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let currentIndex = 0;

    const startTyping = () => {
      setDisplayedText('');
      setIsComplete(false);
      currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (intervalId) clearInterval(intervalId);
          setIsComplete(true);
          onComplete?.();

          if (loop) {
            timeoutId = setTimeout(() => {
              startTyping();
            }, loopDelay);
          }
        }
      }, speed);
    };

    startTyping();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, onComplete, loop, loopDelay]);

  return (
    <div className={className}>
      <span>{displayedText}</span>
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="ml-0.5 inline-block"
        >
          |
        </motion.span>
      )}
    </div>
  );
};

export default TypewriterText;
