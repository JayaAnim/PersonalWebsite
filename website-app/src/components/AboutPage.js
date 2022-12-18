import '../styles/AboutPage.css';
import portrait from '../img/largeaboutpage.png';
import { useEffect, useRef, useState} from 'react';
import Aos from 'aos';
import { cardNames } from '../data/CardData.js';

export default function AboutPage() {
    /*
    // Calls jiggle function every 3.75 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
          jiggleRandomCard();
        }, 3750);
    
        return () => clearInterval(intervalId);
      }, []);

    // Randomly selects card and creates jiggle effect
    const jiggleRandomCard = () => {
        const cards = document.querySelectorAll('.about-card');
    
        const randomIndex = Math.floor(Math.random() * cards.length);

        const randomCard = cards[randomIndex];
        const oldContent = randomCard.textContent;
        randomCard.textContent = "Click me!";
        randomCard.classList.add('jiggle');

        setTimeout(() => {
          randomCard.classList.remove('jiggle');
          randomCard.textContent = oldContent;
        }, 1500);

    }
    */
    return (
        <>
            <div className='container-fluid aboutPage'>
                {/*<img src={portrait} alt='portrait' className='about-image'/>*/}
                <div className='about-image'></div>
                <div className='row d-flex align-items-center justify-content-end h-100'>
                    <div className='page-column'>
                        {cardNames.map((o, index) => {
                            return (
                                <Card key={index} textContent={o.name} delay={o.delay} zoom={o.zoom}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const textContent = props.textContent;
    const delay = props.delay;
    const zoom = props.zoom;

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    //{`card-col ${isExpanded ? 'expanded' : ''}`}
    return (
        <>
            <div className='card-container'>
                <div className={`about-card ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
                    <div className='card-front'>
                        <span className='text-center'>{textContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
}