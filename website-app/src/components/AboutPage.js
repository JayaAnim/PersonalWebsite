import './styles/AboutPage.css';
import portrait from '../img/newnew.png';
import { useEffect, useRef, useState} from 'react';
import Aos from 'aos';

export default function AboutPage() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
          jiggleRandomCard();
        }, 3750);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

    const jiggleRandomCard = () => {
        // Select all of the cards
        const cards = document.querySelectorAll('.card-col');
      
        // Generate a random number between 0 and the number of cards - 1
        const randomIndex = Math.floor(Math.random() * cards.length);
        // Select the card at the random index
        const randomCard = cards[randomIndex];
        const oldContent = randomCard.textContent;
        randomCard.textContent = "Click me!";
        // Add the jiggle class to the random card
        randomCard.classList.add('jiggle');

        // Remove the jiggle class after the animation has finished
        setTimeout(() => {
          randomCard.classList.remove('jiggle');
          randomCard.textContent = oldContent;
        }, 1500);

    }

    //const cardNames = ['Education', 'Skills and Expertise', 'Work History', 'Professional Goals', 'Personal Background', 'Contact Information'];
    const cardNames = [
    {'name': 'Education', 'delay': 100, 'zoom': 'zoom-in-down'}, 
    {'name': 'Skills and Expertise', 'delay': 200, 'zoom': 'zoom-in-down'},
    {'name': 'Work History', 'delay': 300, 'zoom': 'zoom-in-down'}, 
    {'name': 'Professional Goals', 'delay': 400, 'zoom': 'zoom-in-up'}, 
    {'name': 'Personal Background', 'delay': 500, 'zoom': 'zoom-in-up'},
    {'name': 'Contact Information', 'delay': 600, 'zoom': 'zoom-in-up'}];
    return (
        <>
            <div className='container-fluid aboutPage'>
                <img src={portrait} alt='portrait' className='about-image'/>
                <div className='row d-flex align-items-center justify-content-end h-100'>
                    <div className='card-container'>
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
    const [flipped, setFlipped] = useState(false);
    const textContent = props.textContent;
    const delay = props.delay;
    const zoom = props.zoom;


    return (
        <>
            <div className='about-card'>
                <div data-aos={zoom} data-aos-delay={delay} className='card-col'>
                    <span className='text-center'>{textContent}</span>
                </div>
            </div>
        </>
    );
}


/*
                        <div className='about-card'>
                            <div data-aos='zoom-in-down' data-aos-delay='100' className='card-col'>
                                <span className='text-center'>Education</span>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div data-aos='zoom-in-down' data-aos-delay='200' className='card-col'>
                                <span className='text-center'>Skills and Expertise</span>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div data-aos='zoom-in-down' data-aos-delay='300' className='card-col'>
                                <span className='text-center'>Work History</span>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div data-aos='zoom-in-up' data-aos-delay='400' className='card-col'>
                                <span className='text-center'>Professional Goals</span>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div data-aos='zoom-in-up' data-aos-delay='500' className='card-col'>
                                <span className='text-center'>Personal Background</span>
                            </div>
                        </div>
                        <div className='about-card'>
                            <div data-aos='zoom-in-up' data-aos-delay='600' className='card-col'>
                                <span className='text-center'>Contact Information</span>
                            </div>
                        </div>
*/