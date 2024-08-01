'use client'

import React, { useState } from 'react';



const HeaderButtons: React.FC = () => {

    const[hovered, setHovered] = useState<boolean>(false);

    return (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <button className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${hovered ? 'bg-white' : 'bg-neon-green'} text-black`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    Download CV
                </button>
                <button className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${hovered ? 'bg-neon-green' : 'bg-white'} text-black`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    Contact Me
                </button>
            </div>
    );
};

export default HeaderButtons;
