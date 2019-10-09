import React from 'react';

const Nav = () => {
    return (
        <div className="nav">
            <h1 className="nav-name">Skyler Stevens</h1>
            <ul className="nav-list ml-auto mt-auto">
                <li className="btn home-nav nav-btn"><a href="#home">Home</a></li>
                <li className="btn about-nav nav-btn"><a href="#about">About</a></li>
                <li className="btn portfolio-nav nav-btn"><a href="#portfolio">Portfolio</a></li>
                <li className="btn contact-nav nav-btn"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
};

export default Nav;