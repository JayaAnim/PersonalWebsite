import '../styles/AboutCard.css';
import { useEffect, useRef, useState} from 'react';

export default function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const textContent = props.textContent;
    const delay = props.delay;
    const zoom = props.zoom;

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    return (
        <>
            <div className='card-container'>
                <div className='about-card' onClick={handleClick}>
                    <div className='card-front'>
                        <span className='text-center'>{textContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

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