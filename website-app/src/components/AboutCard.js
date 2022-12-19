import '../styles/AboutCard.css';
import { useEffect, useRef, useState} from 'react';

export default function Card(props) {
    //Props to display initial card values
    const textContent = props.textContent;
    const delay = props.delay;
    const zoom = props.zoom;

    //States and refs to handle expansion
    const [isExpanded, setIsExpanded] = useState(false);
    const [style, setStyle] = useState({});
    const containerRef = useRef();
    const cardRef = useRef();

    useEffect(() => {
        let offsetY;
        if (window.innerWidth <= 1024) {
            offsetY = cardRef.current.offsetTop + containerRef.current.offsetTop - props.parentTop;
        } else {
            offsetY = cardRef.current.offsetTop + containerRef.current.offsetTop - 65;
        }
        let offsetX = cardRef.current.offsetLeft + containerRef.current.offsetLeft - props.parentLeft;
        
        if (isExpanded) {
            containerRef.current.style.opacity = '1';
            setStyle({
                transform: `translate(${-1 * (offsetX)}px, ${-1 * (offsetY)}px)`,
                height: `${props.parentHeight}px`,
                width: `${props.parentWidth}px`,
                zIndex: 5,
                transition: '1s'
            });
        } else {
            containerRef.current.style.opacity = '.95';
            setStyle({
                transform: `translate(0px, 0px)`,
                transition: '1s'
            });
        }
    }, [isExpanded]);

    //  height: `${props.parentHeight * .9}px`,
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <div ref={containerRef} className='card-container'>
                <div ref={cardRef} className='about-card' onClick={handleClick} style={style}>
                    <div className='card-front'>
                        <span className='text-center'>{textContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

    /*
    containerRef.current.style
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