import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { LogoIcon, MoonIcon, SunIcon } from '../Assets/Icons';
import './header.css';

const Header = () => {

    const { isDark, setIsDark } = useContext(ThemeContext);

    return (
        <header className="header">
            <div className="container">
                <div className='logo-wrapper'>
                    <div className="logo">
                        <LogoIcon />
                        <span>JS Snipets</span>
                    </div>
                    <button className='icon' onClick={() => setIsDark(!isDark)}>
                        { isDark ? <MoonIcon /> : <SunIcon /> }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;