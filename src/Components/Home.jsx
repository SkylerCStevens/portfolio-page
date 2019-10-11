import React from 'react';

const Home = () => {
    return (
        <header role="banner" className="home" id="home">
            <div className="home-middle">
            <div className="welcome-p">
            <p className="name-p">Welcome! My name is <span className="name">Skyler Stevens</span>.</p> 
            <p className="intro-p">I am a Full-Stack Developer based out of Charlotte North Carolina</p>
            </div>
            <a className="view-more btn" href="#about">VIEW MORE</a>
            </div>
        </header>
    )
};

export default Home;