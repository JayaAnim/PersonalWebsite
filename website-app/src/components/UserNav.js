import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoBuffer } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import './UserNav.css'

export default function UserNav() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [homeSelected, setHomeSelected] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        {isOpen ? <>
          <Link to='/' className='navLink row'>Home</Link>
          <Link to='AboutPage' className='navLink'>About</Link>
          <Link to='ProjectPage' className='navLink'>Projects</Link>
          <Link to='ResumePage' className='navLink'>Resume</Link>
          <Link to='ContactPage' className='navLink'>Contact</Link>
        </> :
          <>
            <div className='col d-flex align-items-center h-100'>
              <Link to='/' className='navLink'>Home</Link>
            </div>
            <div className='col d-flex align-items-center h-100'>
              <Link to='AboutPage' className='navLink'>About</Link>
            </div>
            <div className='col d-flex align-items-center h-100'>
              <Link to='ProjectPage' className='navLink'>Projects</Link>
            </div>
            <div className='col d-flex align-items-center h-100'>
              <Link to='ResumePage' className='navLink'>Resume</Link>
            </div>
            <div className='col d-flex align-items-center h-100'>
              <Link to='ContactPage' className='navLink'>Contact</Link>
            </div>
          </>
        }
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}
