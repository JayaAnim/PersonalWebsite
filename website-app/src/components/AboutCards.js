import { useRef, useEffect, useState } from 'react';
import ContactContent from './ContactContent';
import EducationContent from './EducationContent';
import PersonalContent from './PersonalContent';
import ProfessionalContent from './ProfessionalContent';
import SkillsContent from './SkillsContent';
import WorkContent from './WorkContent';
import '../styles/AboutCards.css';

export default function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [style, setStyle] = useState({});
    const [contentStyle, setContentStyle] = useState({});
    const parentRef = props.parentRef;
    const cardRef = useRef();

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
        setIsExpanded(!isExpanded);
    }

    return (
        <div ref={cardRef} className='about-card' onClick={handleClick} style={style}>
            <div className='card-front' style={contentStyle}>
                {!isExpanded && <h4 className='text-center'>{props.cardInformation.name}</h4>}
                {isExpanded && <span data-aos='zoom-out' data-aos-delay='600'>{props.cardInformation.content}</span>}
            </div>
        </div>
    );
}









