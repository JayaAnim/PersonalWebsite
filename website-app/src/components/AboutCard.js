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

    useEffect(() => {
        if (isExpanded) {
            setStyle({
                transform: `translate(-${containerRef.current.offsetLeft - props.parentLeft}px, -${containerRef.current.offsetTop -65}px)`,
                height: `${props.parentHeight * .9}px`,
                zIndex: '5',
                transition: '1.5s'
            });
        } else {
            setStyle({
                transform: `translate(0px, 0px)`,
                transition: '1.5s'
            });
        }
    }, [isExpanded]);

    // height: '75vh',
    const handleClick = () => {
        setIsExpanded(!isExpanded);
        //containerRef.style.transform = `translate(${containerRef.current.offsetTop}px, ${containerRef.current.offsetLeft}px)`;
    }

    return (
        <>
            <div ref={containerRef} className='card-container bg-danger'>
                <div className='about-card' onClick={handleClick} style={style}>
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