import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../assets/css/navbar.css';

export default function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link 
                        to="/"
                        className="navbar-brand" 
                        onClick={closeMobileMenu}
                    >
                        İnsan Kaynakları
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                                Ana Sayfa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links" to="/about" onClick={closeMobileMenu}>
                                Hakkımızda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links" to="/contact" onClick={closeMobileMenu}>
                                İletişim
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Giriş Yap</Button>}
                </div>
            </nav>
        </>
    );
}
