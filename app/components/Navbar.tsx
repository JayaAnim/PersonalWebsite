'use client';
import React, { useEffect, useRef, useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {


        if (!navRef?.current?.offsetTop) return;

        const initialNavOffset = navRef.current.offsetTop;

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (initialNavOffset && currentScrollPosition >= initialNavOffset) {
                setIsSticky(true); 
            }
            else {
                setIsSticky(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav ref={navRef} className={`z-50 w-full bg-black border border-white transition-all duration-300 ${isSticky ? 'fixed top-0 left-0' : 'absolute bottom-0 left-0'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://github.com/JayaAnim" className="flex items-center space-x-3 rtl:space-x-reverse" target="_blank">
                    <img src="/github.svg" alt="GitHub" className="h-8 w-8" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Chase</span>
                </a>
                <button
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 hover:text-neon-green md:hover:bg-transparent md:border-0 md:p-0" aria-current="page">Landing</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-white rounded hover:bg-gray-700 hover:text-neon-green md:hover:bg-transparent md:border-0 md:p-0">Experience</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 hover:text-neon-green md:hover:bg-transparent md:border-0 md:p-0">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 hover:text-neon-green md:hover:bg-transparent md:border-0 md:p-0">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-white rounded hover:bg-gray-700 hover:text-neon-green md:hover:bg-transparent md:border-0 md:p-0">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;
