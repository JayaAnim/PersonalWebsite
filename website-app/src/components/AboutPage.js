import '../styles/AboutPage.css';
import { useEffect, useRef, useState} from 'react';

export default function AboutPage() {
    const cardContainerRef = useRef();

    return (
        <>
            <div className='container-fluid about-page-container'>
                <div className='about-image'></div>
                <div className='content-container'>
                    <div ref={cardContainerRef} className='card-container'>
                        <Card parentRef={cardContainerRef}/>
                        <Card parentRef={cardContainerRef}/>
                        <Card parentRef={cardContainerRef}/>
                        <Card parentRef={cardContainerRef}/>
                        <Card parentRef={cardContainerRef}/>
                        <Card parentRef={cardContainerRef}/>
                    </div>
                </div>
            </div>
        </>
    );
}

function Card(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [style, setStyle] = useState({});
    const [contentStyle, setContentStyle] = useState({});
    const parentRef = props.parentRef;
    const cardRef = useRef();

    useEffect(() => {
        if (isExpanded) {
            console.log(cardRef.current.offsetLeft);
            setStyle({
                transform: `translate(${-1 * (cardRef.current.offsetLeft)}px, ${-1 * (cardRef.current.offsetTop)}px)`,
                zIndex: 5,
                transition: '1s'
            });
            setContentStyle({
                width: `${parentRef.current.offsetWidth}px `,
                height: `${parentRef.current.offsetHeight}px`,
                transition: '1s'
            });
        } else {
            setStyle({
                transform: 'translate(0, 0)',
                transition: '1s'
            });
            setContentStyle({
                transition: '1s'
            });
        }
    }, [isExpanded]);

    //                height: `${parentRef.current.offsetHeight}px`,

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div ref={cardRef} className='about-card' onClick={handleClick} style={style}>
            <div className='card-front' style={contentStyle}>
                <p>hi</p>
            </div>
        </div>
    );
}