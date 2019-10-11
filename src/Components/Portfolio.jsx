import React from 'react';
import guessingGame from '../images/guessing-game.png';
import ecommerce from '../images/ecommerce.png';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
            <h2 className="page-header">PROJECTS</h2>
            <ul className="tech-list text-center">
                <li><button className="btn btn-link tech-filter">HTML/CSS</button></li>
                <li><button className="btn btn-link tech-filter">JavaScript</button></li>
                <li><button className="btn btn-link tech-filter">ReactJS</button></li>
                <li><button className="btn btn-link tech-filter">MySQL</button></li>
                <li><button className="btn btn-link tech-filter">NodeJS</button></li>
            </ul>
            <div className="row image-row">
            <div className="image-container text-center">
                <img className="project-img" src={guessingGame} alt="Screenshot of number guessing game"></img>
                    <div className="middle">
                        <p className="text">Number Guessing Game</p>
                        <p className="text">ReactJS</p>
                        <div className="project-link-container">
                        <a className="project-link" href="https://github.com/SkylerCStevens/number-guessing-game" target="_blank">GitHub</a>
                        <a className="project-link" href="https://react-number-guessing-game.netlify.com/" target="_blank">Netlify</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src={ecommerce} alt="Screenshot of ecommerce site"></img>
                    <div className="middle">
                        <p className="text">Ecommerce Mock Site</p>
                        <p className="text">React, NodeJS, MySQL</p>
                        <div className="project-link-container">
                        <a className="project-link" href="https://github.com/SkylerCStevens/ecommerce-site" target="_blank">GitHub</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src="https://www.cabarethotspot.com/wp-content/uploads/2018/08/ComingSoon-1280x640.jpg" alt="This is a project"></img>
                    <div className="middle">
                        <p className="text"></p>
                        <p className="text"></p>
                        <div className="project-link-container">
                        <a className="project-link" href="">GitHub</a>
                        <a className="project-link" href="">Netlify</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src="https://www.cabarethotspot.com/wp-content/uploads/2018/08/ComingSoon-1280x640.jpg" alt="This is a project"></img>
                    <div className="middle">
                        <p className="text"></p>
                        <p className="text"></p>
                        <div className="project-link-container">
                        <a className="project-link" href="">GitHub</a>
                        <a className="project-link" href="">Netlify</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src="https://www.cabarethotspot.com/wp-content/uploads/2018/08/ComingSoon-1280x640.jpg" alt="This is a project"></img>
                    <div className="middle">
                        <p className="text"></p>
                        <p className="text"></p>
                        <div className="project-link-container">
                        <a className="project-link" href="">GitHub</a>
                        <a className="project-link" href="">Netlify</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src="https://www.cabarethotspot.com/wp-content/uploads/2018/08/ComingSoon-1280x640.jpg" alt="This is a project"></img>
                    <div className="middle">
                        <p className="text"></p>
                        <p className="text"></p>
                        <div className="project-link-container">
                        <a className="project-link" href="">GitHub</a>
                        <a className="project-link" href="">Netlify</a>
                        </div>
                    </div>
                    </div>
                    <div className="image-container text-center">
                <img className="project-img" src="https://www.cabarethotspot.com/wp-content/uploads/2018/08/ComingSoon-1280x640.jpg" alt="This is a project"></img>
                    <div className="middle">
                        <p className="text"></p>
                        <p className="text"></p>
                        <div className="project-link-container">
                        <a className="project-link" href="">GitHub</a>
                        <a className="project-link" href="">Netlify</a>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            
        </div>
    )
};

export default Portfolio;