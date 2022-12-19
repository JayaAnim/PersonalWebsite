import '../styles/AboutPage.css';
import portrait from '../img/largeaboutpage.png';
import { useEffect, useRef, useState} from 'react';
import Aos from 'aos';
import AboutCardContainer from './AboutCardContainer';

export default function AboutPage() {

    return (
        <>
            <div className='container-fluid aboutPage'>
                {/*<img src={portrait} alt='portrait' className='about-image'/>*/}
                <div className='about-image'></div>
                <div className='row d-flex align-items-center justify-content-end h-100'>
                    <AboutCardContainer/>
                </div>
            </div>
        </>
    );
}