import '../styles/AboutCardContainer.css';
import { cardNames } from '../data/CardData.js';
import AboutCard from './AboutCard';

export default function AboutCardContainer() {
    return (
        <div className='page-column'>
            {cardNames.map((o, index) => {
                return (
                    <AboutCard key={index} textContent={o.name} delay={o.delay} zoom={o.zoom}/>
                )
            })}
        </div>
    )
}