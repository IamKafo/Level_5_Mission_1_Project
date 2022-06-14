import React, { useState } from 'react'
import './NavBar.css'
import Logo from "../Assets/turnerscars_logo.png"
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [click, setClick] = useState(false);
    

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false)
    }

  return (
    <>
    <div className="navBar">
        <div className="navBarContainer">
            <Link to='/'><div className="navLogo">
                <img src={Logo} alt="logo" width={200} />
            </div></Link>
            <div className="menuIcon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'navMenu active' : 'navMenu' } >
                <div className="navItem">
                <li className="navItems">
                    <Link to='/' className='navLink' onClick={closeMobileMenu} >
                        Home
                    </Link>
                </li>
                <li className="navItems">
                    <Link to='/products' className='navLink' onClick={closeMobileMenu} >
                        Products
                    </Link>
                </li>
                <li className="navItems">
                    <Link to='/contact' className='navLink' onClick={closeMobileMenu} >
                        Contact
                    </Link>
                </li>
                <li className="navItems">
                    <Link to='/login' className='navLink' id='login' onClick={closeMobileMenu} >
                        Login
                    </Link>
                </li>
                </div>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar