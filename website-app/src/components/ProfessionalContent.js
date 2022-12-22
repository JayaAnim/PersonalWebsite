import '../styles/ProfessionalContent.css';
import { Link } from 'react-router-dom';

export default function ProfessionalContent() {
    return (
        <div className='professional-container'>
            <div>
                <div className='professional-header'>Goals</div>
                <div className='professional-content'>
                    I am currently trying to break into full-stack development (with a focus on front-end) for both free-lancing and potential
                    full-time jobs. With full-stack development I am focusing on refining my skills in both javascript, react, css, sql, and mongoDB.
                    For my education my degree plan has a focus on machine learning as I plan to go to the University of Florida for my masters
                    in machine learning. This year I have started to focus on both <Link to='/ProjectPage'>personal projects</Link> and <a href='https://leetcode.com/JayaAnim/'> leetcode problems </a>
                    to refine my skills in both UI design, data management, and data structures.
                </div>
            </div>
        </div>
    );
}