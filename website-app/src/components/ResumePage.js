import '../styles/ResumePage.css';
import { useEffect, useRef } from 'react';
import resume1 from '../img/resume1.png';
import resume2 from '../img/resume2.png';
import resume3 from '../img/resume3.png';
import { BsDownload } from 'react-icons/bs';

export default function ResumePage() {
    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            rotate();
        }, 500);
        const intervalId = setInterval(() => {
            rotate();
        }, 3750);
      
          // Clean up the interval when the component unmounts
          return () => {
            clearInterval(intervalId);
            clearTimeout(timer);
          }
    }, []);

    const rotate = () => {
        shiftLeft(imageOneRef);
        shiftLeft(imageTwoRef);
        shiftLeft(imageThreeRef);
    }

    const shiftLeft = (cardRef) => {
        if (cardRef.current.classList.contains('resume-card-active')) {
            cardRef.current.classList.remove('resume-card-active');
            cardRef.current.classList.add('resume-card-left');
        }
        else if (cardRef.current.classList.contains('resume-card-left')) {
            cardRef.current.classList.remove('resume-card-left');
            cardRef.current.classList.add('resume-card-right');
        }
        else {
            cardRef.current.classList.remove('resume-card-right');
            cardRef.current.classList.add('resume-card-active');
        }
    }

    const handleClick = () => {
        alert('download currently inoperable');
    }

    return (
        <div className='resume-container'>
            <div className='resume-carousel-container'>
                <button className='resume-download-button' onClick={handleClick}>Download PDF <BsDownload/></button>
                <img ref={imageOneRef} className='resume-card resume-card-active' src={resume1} alt='resume picture'/>
                <img ref={imageTwoRef} className='resume-card resume-card-left' src={resume2} alt='resume picture'/>
                <img ref={imageThreeRef} className='resume-card resume-card-right' src={resume3} alt='resume picture'/>
            </div>
        </div>
    );
}


