import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaNodeJs } from 'react-icons/fa';
import './styles/HomePage.css';
import portfolio from '../img/unnamed.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    return (
        <>
            <div className='container-fluid containerStyle'>
                <div className='row d-flex justify-content-center h-50'>
                    <div className='col-6 d-flex align-items-end justify-content-center'>
                        <div className='mb-4'>
                            <img src={portfolio} alt='portfolio picture' />
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
            </div>
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