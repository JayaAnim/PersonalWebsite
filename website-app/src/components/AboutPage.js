import './styles/AboutPage.css';
import portrait from '../img/newnew.png';
import { useEffect, useRef, useState} from 'react';

export default function AboutPage() {
    const jiggled = useRef(false);

    useEffect(() => {
        if (jiggled.current) return;
        jiggled.current = true;
        jiggleRandomCard();
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
    return (
        <>
            <div className='container-fluid aboutPage'>
                <img src={portrait} alt='portrait' className='about-image'/>
                <div className='row d-flex align-items-center justify-content-end h-100'>
                    <div className='card-container'>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                        <div className='about-card'>
                            <div className='card-col'>
                                hi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
/*
<div className='col-12 d-flex flex-wrap align-items-center h-100'>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
<div className='col-6 col-lg-4 d-flex h-25'>
    <div className='card row d-flex w-100 m-2'>

    </div>
</div>
</div>
*/