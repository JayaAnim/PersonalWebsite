import React from 'react';
import HeaderTypedText from './HeaderTypedText';
import Navbar from './Navbar';
import FallingLetterWrapper from './FallingLetter';
import HeaderButtons from './HeaderButtons';



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
            <HeaderButtons/>
        </header>
    );
};

export default Header;
