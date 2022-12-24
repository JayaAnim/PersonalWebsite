import '../styles/EducationContent.css';

export default function EducationContent() {
    return (
        <div className='education-container'>
            <dl className='education-list-container'>
                <div className='education-item'>
                    <dt>University</dt>
                    <dd>University of West Florida</dd>
                </div>
                <div className='education-item'>
                    <dt>Major</dt>
                    <dd>Computer Science</dd>
                </div>
                <div className='education-item'>
                    <dt>Credits Towards Degree</dt>
                    <dd>108 credits out of 120 credits</dd>
                </div>
                <div>
                    <span className='education-header'>Relevant Classes</span>
                    <span className='education-subtext'>all classes not included</span>
                </div>
                <div className='education-item'>
                    <dt>Data Str and Alg II</dt>
                </div>
                <div className='education-item'>
                    <dt>Advanced Computer Programming</dt>
                </div>
                <div className='education-item'>
                    <dt>Client Side Programming</dt>
                </div>
                <div className='education-item'>
                    <dt>Discrete Structures</dt>
                </div>
                <div className='education-item'>
                    <dt>Database Systems</dt>
                </div>
            </dl>
        </div>
    );
}
