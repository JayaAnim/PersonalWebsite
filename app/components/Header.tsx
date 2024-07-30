import React from 'react';
import HeaderTypedText from './HeaderTypedText';
import Navbar from './Navbar';
import FallingLetterWrapper from './FallingLetter';



const Header: React.FC = () => {


    return (
        <header className="relative z-20 h-screen w-screen bg-[url('/header_bg.svg')] bg-cover bg-center flex flex-col items-center justify-center">
            <Navbar />
            <FallingLetterWrapper/>
            <h1 className="text-4xl md:text-6xl font-bold text-center">
                <span className="text-white">Hi, I'm </span>
                <span className="text-electric-blue">Chase</span>
            </h1>
            <HeaderTypedText />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <button className="px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-neon-green text-black hover:bg-[#00CCCC]">
                    Download CV
                </button>
                <button className="px-6 py-3 rounded-full font-semibold transition-colors duration-300 bg-white text-black hover:bg-gray-200">
                    Contact Me
                </button>
            </div>
        </header>
    );
};

export default Header;
