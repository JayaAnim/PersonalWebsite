'use client';

import React, { useState, useEffect } from 'react';

const HeaderTypedText: React.FC = () => {
  const [whiteText, setWhiteText] = useState('');
  const [blueText, setBlueText] = useState('');
  const fullWhiteText = "I'm a ";
  const fullBlueText = "Software Developer";

  useEffect(() => {
    let whiteIndex = 0;
    let blueIndex = 0;
    let isTypingWhite = true;

    const intervalId = setInterval(() => {
      if (isTypingWhite) {
        if (whiteIndex < fullWhiteText.length) {
          setWhiteText(fullWhiteText.slice(0, whiteIndex + 1));
          whiteIndex++;
        } else {
          isTypingWhite = false;
        }
      } else {
        if (blueIndex < fullBlueText.length) {
          setBlueText(fullBlueText.slice(0, blueIndex + 1));
          blueIndex++;
        } else {
          clearInterval(intervalId);
        }
      }
    }, 120); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-2xl md:text-3xl">
      <span className="text-white">{whiteText}</span>
      <span className="text-[#00FFFF]">{blueText}</span>
      <span className="text-[#00FFFF] animate-pulse">|</span>
    </p>
  );
};

export default HeaderTypedText;
