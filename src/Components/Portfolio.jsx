import React, { Component } from 'react';
import Projects from "../data/projects.json";


class Portfolio extends Component {
    state = {
        projects: Projects
    }

    handleButton = (e) => {
        
    }

    render () {
       const { projects } = this.state
       console.log(projects)
    return (
        <div className="portfolio mb-5" id="portfolio">
            <div className="container">
            <h2 className="page-header">PROJECTS</h2> 
            <div className="row">
            {projects.map(project => (
                <div className="image-row">
                <div className="image-container text-center">
                    <img className="project-img" src={project.image} alt={project.name}></img>
                        <div className="middle">
                            <p className="text inline">{project.name}, </p>
                            <p className="text">{project.languages.map(language => (
                                <div>{language}</div>
                            ))}</p>
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