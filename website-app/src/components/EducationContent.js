import '../styles/EducationContent.css';

export default function EducationContent() {
    return (
        <ul className='education-container'>
            <li className='education-item'>
                <span className='education-item-content-1'>University</span>
                <span className='education-item-content-2'>University of West Florida</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Major</span>
                <span className='education-item-content-2'>Computer Science</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Credits Towards Degree</span>
                <span className='education-item-content-2'>108/120</span>
            </li>
            <li className='education-classes-header'>
                Recent Relevant Classes
                <div className='education-classes-subheader'>All Classes Not Included</div>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Data Str And Alg II</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>	Advanced Computer Programming</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Client-Side Programming</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Discrete Structures</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>	Database Systems</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Data Structures & Algorithms I</span>
            </li>
            <li className='education-item'>
                <span className='education-item-content-1'>Algorithm and Program Design</span>
            </li>
        </ul>
    );
}