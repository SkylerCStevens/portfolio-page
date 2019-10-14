import React from 'react';

const Nav = () => {
    return (
        <nav role="navigation" className="nav" id="nav">
            <h1 className="nav-name">SKYLER STEVENS</h1>
            <ul className="nav-list ml-auto mt-auto">
                <li className="btn home-nav nav-btn"><a href="#home">HOME</a></li>
                <li className="btn about-nav nav-btn"><a href="#about">ABOUT</a></li>
                <li className="btn portfolio-nav nav-btn"><a href="#portfolio">PORTFOLIO</a></li>
                <li className="btn contact-nav nav-btn"><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    )
};

export default Nav;