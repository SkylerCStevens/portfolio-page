import React, { Component } from 'react';
import Projects from "../data/projects.json";


class Portfolio extends Component {
    state = {
        projects: Projects
    }

    render () {
       const { projects } = this.state
       console.log(projects)
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
            <div className="row">
            {projects.map(project => (
                <div className="image-row">
                <div className="image-container text-center">
                    <img className="project-img" src={project.image} alt={project.name}></img>
                        <div className="middle">
                            <p className="text inline">{project.name}, </p>
                            {project.languages.forEach(language => (
                                <p className="text">{language}</p>
                            ))}
                            <div className="project-link-container">
                            <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {project.netlify ? <a className="project-link" href={project.netlify} target="_blank" rel="noopener noreferrer">Netlify</a> : "" }
                            </div>
                        </div>
                        </div>
                </div>
        ))}
            </div>
            </div>
            
        </div>
    )
    }
};

export default Portfolio;