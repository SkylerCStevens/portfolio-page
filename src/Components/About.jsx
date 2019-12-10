import React from 'react';
import headshot from '../images/headshot.png'

const About = () => {
    return (
        <div className="container about" id="about">
            <h2 className="page-header">ABOUT ME</h2>
            <div>
            <img src={headshot} alt="Photo of the author of website smiling with floating lights behind them"></img>
            </div>
            <div>
            <p className="upper-p">My name is Skyler Stevens. I am a junior back end developer from Charlotte North Carolina. My passion for software development stems from my love of engineering in general. I love problem solving and finding what makes things tick. When I was young I took apart gaming consoles, guitar pedals, and guitar amps to see their parts and fix little bugs. This lead to building my own guitars and finally to coding.</p>

            <p className="lower-p">My favorite part of coding is the problem solving to figure out what you need to put the pieces of an app together, such as APIs to connect front end to the database or thinking through the elements needed to create a filter for multiple fields. I currently have used such languages and frameworks as HTML/Html5, CSS, JavaScript, ReactJS, MySQL, NodeJS, Express, and MongoDB.</p>
            </div>
        </div>
    )
};

export default About;