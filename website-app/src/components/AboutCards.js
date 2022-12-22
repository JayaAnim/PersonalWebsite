import { useRef, useEffect, useState } from 'react';
import ContactContent from './ContactContent';
import EducationContent from './EducationContent';
import PersonalContent from './PersonalContent';
import ProfessionalContent from './ProfessionalContent';
import SkillsContent from './SkillsContent';
import WorkContent from './WorkContent';
import '../styles/AboutCards.css';


export default function Card({cardInformation, parentRef, handleExpand, handleContract, numberExpanded}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [style, setStyle] = useState({});
    const [contentStyle, setContentStyle] = useState({});
    const [isJiggling, setIsJiggling] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(numberExpanded);
            const random = generateRandom();
            if (random === 1 && numberExpanded === 0 && !isExpanded) {
                addJiggle();
    
                setTimeout(() => {
                    removeJiggle();
                }, 1500);
            }
          }, 1500);
      
          // Clean up the interval when the component unmounts
          return () => clearInterval(intervalId);
    }, [numberExpanded]);

    useEffect(() => {
        if (isExpanded) {
            setStyle({
                transform: `translate(${-1 * (cardRef.current.offsetLeft)}px, ${-1 * (cardRef.current.offsetTop)}px)`,
                zIndex: 5,
                transition: '.5s'
            });
            setContentStyle({
                width: `${parentRef.current.offsetWidth}px `,
                height: `${parentRef.current.offsetHeight}px`,
                display: 'block',
                opacity: 1,
                transition: '1s'
            });
        } else {
            setStyle({
                transform: 'translate(0, 0)',
                transition: '.5s'
            });
            setContentStyle({
                transition: '.5s'
            });
        }
    }, [isExpanded]);

    const handleClick = () => {
        handleChange();
        setIsExpanded(!isExpanded);
    }

    const handleChange = () => {
        if (!isExpanded) handleExpand();
        else handleContract();
    }

    const generateRandom = () => {
        const min = 1;
        const max = 10;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
    
    const addJiggle = () => {
        if (!cardRef.current.classList.contains('jiggle') && !isExpanded) {
            cardRef.current.classList.add('jiggle');
            setIsJiggling(true);
            console.log('adding');
        }
    }
    
    const removeJiggle = () => {
        if (cardRef.current.classList.contains('jiggle')) {
            cardRef.current.classList.remove('jiggle');
            setIsJiggling(false);
        }
    }



    return (
        <div ref={cardRef} className='about-card' onClick={handleClick} style={style}>
            <div className='card-front' style={contentStyle}>
                {!isExpanded && <h4 className='text-center'>{cardInformation.name}</h4>}
                {isExpanded && <span data-aos='zoom-out' data-aos-delay='600'>{cardInformation.content}</span>}
            </div>
        </div>
    );
}

/*
useEffect(() => {
    const intervalId = setInterval(() => {
        const random = generateRandom();
        if (random === 1 && props.numberCurrentlyExpanded === 0 && !isExpanded) {
            console.log(props.numberCurrentlyExpanded);
            addJiggle();

            setTimeout(() => {
                removeJiggle();
            }, 1500);
        }
      }, 1500);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
}, []);

const generateRandom = () => {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const addJiggle = () => {
    if (!cardRef.current.classList.contains('jiggle') && !isExpanded) {
        cardRef.current.classList.add('jiggle');
        setIsJiggling(true);
        console.log('adding');
    }
}

const removeJiggle = () => {
    if (cardRef.current.classList.contains('jiggle')) {
        cardRef.current.classList.remove('jiggle');
        setIsJiggling(false);
    }
}
*/






