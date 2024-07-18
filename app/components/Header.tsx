import React from 'react';
import HeaderTypedText from './HeaderTypedText';

const Header: React.FC = () => {
    return (
        <header className="h-screen w-screen bg-[url('/header_bg.svg')] bg-cover bg-center flex flex-col items-center justify-center space-y-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
                <span className="text-white">Hi, I'm </span>
                <span className="text-[#00FFFF]">Chase</span>
            </h1>
            <HeaderTypedText />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <button className="px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-[#00FFFF] text-black hover:bg-[#00CCCC]">
                    Download CV
                </button>
                <button className="px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-white text-black hover:bg-gray-200">
                    Contact Me
                </button>
            </div>
            <button className="absolute bottom-8 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-300 hover:bg-[#00FFFF] hover:bg-opacity-20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
