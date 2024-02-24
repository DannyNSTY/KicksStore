import React from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import './Nav.css';



const Nav = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='app__navbar-links'>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#home">Home</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#about-us">About Us</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#products">Products</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#contact-us">Contact Us</a></li>
        </ul>
        <div className='app__navbar-smallscreen'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={() => setToggleMenu(true)} />
        
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <img src={hamburger} className="overlay__close" alt="hamburguer icon" width={25} height={25} onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen_links'>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#home">Home</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#about-us">About Us</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#products">Products</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
      )}

        </div>
      </nav>
    </header>
  )
};

export default Nav;