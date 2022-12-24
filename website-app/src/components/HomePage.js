import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import '../styles/HomePage.css';
import portfolio from '../img/homeicon.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IconContext } from 'react-icons';

export default function HomePage() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    return (
        <IconContext.Provider value={{ color: '#333333', size: '50%' }}>
            <div className='homepage-container'>
                <div className='homepage-header-container'>
                    <h2 className='homepage-header'>Hi, My Name Is Chase</h2>
                </div>
                <div className='homepage-middle-container'>
                    <div className='homepage-middle-left-container'>
                        <img src={portfolio} className='homepage-image' alt='picture of chase' />
                    </div>
                    <div className='homepage-middle-right-container'>
                        <div className='homepage-paragraph-container'>
                            <p className='homepage-paragraph'>
                                <span data-aos='fade-up' data-aos-delay='100'>I'm an aspring software developer with a passion for web development, UI/UX design, and ML.</span>
                                <span data-aos='fade-up' data-aos-delay='200'> My personal projects include both web development and data structure and algorithm design problems.</span>
                                <span data-aos='fade-up' data-aos-delay='300'>I am always open to new projects, internships, or job opportunities. Feel free to <Link to='ContactPage' style={{ textDecoration: 'none' }}>contact me!</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='homepage-bottom-container'>
                    <FaNodeJs/>
                    <FaReact/>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <SiJavascript/>
                </div>
            </div>
        </IconContext.Provider>
    );
}

/*
paragraph text -
<span data-aos='fade-up' data-aos-delay='100'>I'm an aspring software developer with a passion for web development, UI/UX design, and ML.</span>
                                    <span data-aos='fade-up' data-aos-delay='200'>My personal projects include both web development and data structure and algorithm design problems.</span>
                                    <span data-aos='fade-up' data-aos-delay='300'>I am always open to new projects, internships, or job opportunities. Feel free to <Link to='ContactPage' style={{textDecoration: 'none'}}>contact me!</Link></span>
header text -hi my name is chase
*/
