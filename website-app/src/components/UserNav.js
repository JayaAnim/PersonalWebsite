import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/UserNav.css';
import '../data/LinkData'
import LinkData from "../data/LinkData";

export default function UserNav() {
  const navRef = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle('responsive_nav');
    buttonRef.current.classList.toggle('hide-button');
    console.log(buttonRef.current.classList);
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        {isOpen ? LinkData.map((link, index) => {
          return (
            <Link key={index} to={link.path} className='navLink' onClick={showNavbar}>{link.name}</Link>
          );
        }) :
          LinkData.map((link, index) => {
            var classList = 'col d-flex align-items-center h-100';
            if (link.path === window.location.pathname) {
              classList = classList + ' selected';
            }
            return (
              <div key={index} className={classList}>
                <Link to={link.path} className='navLink'>{link.name}</Link>
              </div>
            );
          })
        }
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button ref={buttonRef} className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
