import '../styles/PersonalContent.css';
import runningPicture from '../img/personalbackground.png';


export default function PersonalContent() {
    return (
        <div className='personal-container'>
            <img src={runningPicture} alt='picture of chase running' className='personal-picture' />
            <div className='personal-content'>
                My name is Chase Lamkin, I am 21 years old, and I was born in Fort Walton beach Florida. My dad was in the Air Force
                so I growing up I lived in Germany, Montana, Texas, New Mexico and Florida. Once graduating highschool
                I joined the National Guard so I could put myself through school and pursue a career in programming. <br /><br />My hobbies
                include riding my motorcycle, working out, and trying new personal programming projects. I have a passion for building new
                things that are useful and innovative, and programming allows me to pursue that everyday!
            </div>
        </div>
    );
}

/*
            <p className='work-paragraph'>My name is Chase Lamkin, I am 21 years old, and I was born in Fort Walton beach Florida. My dad was in the Air Force
                so I growing up I lived in Germany, Montana, Texas, New Mexico and Florida. Once graduating highschool
                I joined the National Guard so I could put myself through school and pursue a career in programming. <br/><br/>My hobbies
                include riding my motorcycle, working out, and trying new personal programming projects. I have a passion for building new
                things that are useful and innovative, and programming allows me to pursue that everyday!
            </p>
*/