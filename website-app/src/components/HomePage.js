import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import './styles/HomePage.css';
import portfolio from '../img/unnamed.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IconContext } from 'react-icons';

export default function HomePage() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    return (
        <>
            <IconContext.Provider value={{ color: '#333333', size: '3.5rem'}}>
            <div className='container-fluid containerStyle'>
                <div className='row d-flex justify-content-center h-50'>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <div>
                            <img src={portfolio} alt='portfolio picture' className='home-image'/>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center h-25'>
                    <div className='col-md-5 col-sm-12 d-flex align-items-start justify-content-center'>
                        <div className='col'>
                            <div>
                                <h2 className='text-center' data-aos='fade-down'>Hi, My Name Is Chase</h2>
                            </div>
                            <div className='text-wrap'>
                                <p className='text-center'>
                                    <span data-aos='fade-up' data-aos-delay='100'>I'm an aspring software developer with a passion for web development, UI/UX design, and ML.</span>
                                    <span data-aos='fade-up' data-aos-delay='200'>My personal projects include both web development and data structure and algorithm design problems.</span>
                                    <span data-aos='fade-up' data-aos-delay='300'>I am always open to new projects, internships, or job opportunities. Feel free to <Link to='ContactPage' style={{textDecoration: 'none'}}>contact me!</Link></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-end h-25'>
                    <div className='col-12 d-flex justify-content-center align-items-center mb-1 h-50'>
                        <span className='me-3 mw-3'>
                            <FaNodeJs/>
                        </span>
                        <span className='me-3 mw-3'>
                            <SiJavascript/>
                        </span>
                        <span className='me-3 mw-3'>
                            <FaReact/>
                        </span>
                        <span className='me-3 mw-3'>
                            <FaHtml5/>
                        </span>
                        <span className='me-3 mw-3'>
                            <FaCss3Alt/>
                        </span>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </>
    );
}

//                         <img src={portfolio} alt='portfolio picture'/>
/*
<div className='row d-flex h-100 w-100'>
<div className='col-12 d-flex justify-content-center align-items-center h-50'>
    <img src={portfolio} alt='portfolio picture'/>
</div>
<div className='col-12 d-flex justify-content-center h-25'>
    <div classname='col'>
        <h2>Hi, My Name Is Chase</h2>
        <p>TADAAAaaaaaaaaaaasssaaaaaa</p>
    </div>
</div>
<div className='col-12 d-flex h-25'>
    hi
</div>
</div>
*/