import '../styles/AboutCardContainer.css';
import { cardNames } from '../data/CardData.js';
import AboutCard from './AboutCard';
import { useEffect, useState, useRef } from 'react';

export default function AboutCardContainer() {
    const pageColRef = useRef();
    const [pixelsToLeft, setPixelsToLeft] = useState(0);
    const [pixelsToTop, setPixelsToTop] = useState(0);
    const [pageColHeight, setPageColHeight] = useState(0);
    const [pageColWidth, setPageColWidth] = useState(0);

    useEffect(() => {
        setPixelsToLeft(pageColRef.current.offsetLeft);
        setPageColHeight(pageColRef.current.offsetHeight);
        setPixelsToTop(pageColRef.current.offsetTop);
        setPageColWidth(pageColRef.current.offsetWidth);
    }, []);
    return (
        <div ref={pageColRef} className='page-column'>
            {cardNames.map((o, index) => {
                return (
                    <AboutCard key={index} textContent={o.name} delay={o.delay} zoom={o.zoom} parentLeft={pixelsToLeft} parentWidth={pageColWidth} parentHeight={pageColHeight} parentTop={pixelsToTop}/>
                )
            })}
        </div>
    )
}