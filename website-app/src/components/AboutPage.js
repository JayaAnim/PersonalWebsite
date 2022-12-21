import '../styles/AboutPage.css';
import { useEffect, useRef, useState} from 'react';
import { cardObjects } from '../data/CardData';
import Card from '../components/AboutCards.js';
import Aos from 'aos';

export default function AboutPage() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    const cardContainerRef = useRef();

    return (
        <>
            <div className='container-fluid about-page-container'>
                <div className='about-image'></div>
                <div className='content-container'>
                    <div ref={cardContainerRef} className='card-container'>
                        {cardObjects.map((cardObject, index) => {
                            return(
                                <Card key={index} cardInformation={cardObject} parentRef={cardContainerRef}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}