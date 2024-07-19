'use client'
import React, { useEffect, useState, useRef } from 'react';

const ExperienceScrollLine: React.FC = () => {
    const [progressBarHeight, setProgressBarHeight] = useState(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (progressBarRef.current && parentRef.current) {
                const progressBarRect = progressBarRef.current.getBoundingClientRect();
                const viewportMiddle = window.innerHeight / 2;
                if (progressBarRect) {
                    // If start of bar is below middle of screen set bar to 0 
                    if (progressBarRect.top >= 0 && progressBarRect.top > viewportMiddle) {
                        setProgressBarHeight(0);
                    }
                    // If start of bar is between middle of screen and top of screen (inclusive) calculate height in pixels from start of bar to middle of screen
                    else if (progressBarRect.top >= 0 && progressBarRect.top <= viewportMiddle) {
                        setProgressBarHeight(viewportMiddle - progressBarRect.top);
                    }
                    // If start of bar is above top of screen and calculated height is <= max height of bar then calculate height in pixels from start of bar to middle of screen
                    else if (progressBarRect.top < 0 && (viewportMiddle + Math.abs(progressBarRect.top)) <= (parentRef.current.clientHeight)) {
                        setProgressBarHeight(viewportMiddle + Math.abs(progressBarRect.top));
                    }
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={parentRef} className="h-full w-full">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-px h-[calc(100%-20px)] bg-gray-600"></div>
            <div
                ref={progressBarRef}
                className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[2px] transition-all duration-1000 ease-in-out rounded-b-full bg-gradient-to-b from-neon-green via-electric-blue to-neon-green shadow-neon-glow"
                style={{
                    height: `${progressBarHeight}px`,
                }}
            ></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="absolute w-2 h-2">
                    <div className="w-full h-full bg-electric-blue rounded-full"></div>
                    <div className="absolute -inset-1 rounded-full border border-gray-400"></div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceScrollLine;

