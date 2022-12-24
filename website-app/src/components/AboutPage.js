import '../styles/AboutPage.css';
import { useEffect, useRef, useState} from 'react';
import { cardObjects } from '../data/CardData';
import Card from '../components/AboutCards.js';
import Aos from 'aos';

export default function AboutPage() {
    const cardContainerRef = useRef();
    const [numberExpanded, setNumberExpanded] = useState(0);
    const [numberToJiggle, setNumberToJiggle] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const random = generateRandom();
            setNumberToJiggle(random);
        }, 3750);
      
          // Clean up the interval when the component unmounts
          return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    const handleNewExpand = () => {
        setNumberExpanded(numberExpanded + 1);
    }

    const handleNewContract = () => {
        setNumberExpanded(numberExpanded - 1);
    }

    const generateRandom = () => {
        const min = 0;
        const max = 5;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    return (
        <>
            <div className='container-fluid about-page-container'>
                <div className='about-image'></div>
                <div className='content-container'>
                    <div ref={cardContainerRef} className='card-container'>
                        {cardObjects.map((cardObject, index) => {
                            return(
                                <Card key={index} index={index} cardInformation={cardObject} parentRef={cardContainerRef} handleExpand={handleNewExpand} handleContract={handleNewContract} numberExpanded={numberExpanded} numberToJiggle={numberToJiggle}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}