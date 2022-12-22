import '../styles/ContactContent.css';
import { SiGmail } from 'react-icons/si';
import { FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';

export default function ContactContent() {
    return (
        <div className='contact-container'>
            <div className='social-media-container'>
                <div className='social-media-item'>
                    <SiGmail className='social-media-icon'/>
                    <div className='info-bar' data-type='chasemlamkin@gmail'/>
                </div>
                <div className='social-media-item'>
                    <FaInstagram className='social-media-icon'/>
                    <div className='info-bar' data-type='chause.2001'/>
                </div>
                <div className='social-media-item'>
                    <FaFacebook className='social-media-icon'/>
                    <div className='info-bar' data-type='Chase Lamkin'/>
                </div>
                <div className='social-media-item'>
                    <FaLinkedin className='social-media-icon'/>
                    <div className='info-bar' data-type='N/A'/>
                </div>
            </div>
        </div>
    );
}