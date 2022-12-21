import '../styles/WorkContent.css';

export default function WorkContent() {
    return (
        <div className='work-container'>
            <div className='work-grid'>
                <div className='work-grid-title'>
                    <div className='work-grid-title-job'>
                        National Guard
                    </div>
                    <div className='work-grid-title-duration'>
                        1.5 years - current
                    </div>
                    <div className='work-grid-title-specification'>
                        Mos - 09R
                    </div>
                </div>
                <div className='work-grid-content'>
                    <ul>
                        <li>leadership</li>
                        <li>working as a team</li>
                        <li>problem solving under stress</li>
                        <li>ability to receive, analyze, and critique information provided</li>
                        <li>interpersonal skills</li>
                    </ul>
                </div>
                <div className='work-grid-content'>
                        <ul>
                            <li>problem solving (technician)</li>
                            <li>communication skills (salesman/technician)</li>
                            <li>time management (technician)</li>
                            <li>problem solving (salesman)</li>
                        </ul>
                </div>
                <div className='work-grid-title'>
                    <div className='work-grid-title-job-right'>
                        Walmart
                    </div>
                    <div className='work-grid-title-duration-right'>
                        2 years
                    </div>
                    <div className='work-grid-title-specification-right'>
                        <span>Electronics salesman<br /></span>
                        <span>Automotive technician</span>
                    </div>
                </div>
                <div className='work-grid-title'>
                    <div className='work-grid-title-job'>
                        Publix
                    </div>
                    <div className='work-grid-title-duration'>
                        5 months
                    </div>
                    <div className='work-grid-title-specification'>
                        Deli clerk
                    </div>
                </div>
                <div className='work-grid-content'>
                    <ul>
                        <li>working as a team</li>
                        <li>time and stress management</li>
                        <li>communcation skills</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}