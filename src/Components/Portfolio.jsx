import React, { Component } from 'react';
import Projects from "../data/projects.json";


class Portfolio extends Component {
    state = {
        projects: Projects
    }

    handlep = (e) => {
        
    }

    render () {
       const { projects } = this.state
       console.log(projects)
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
            <h2 className="page-header">PROJECTS</h2>
            {/* <ul className="tech-list text-center">
                <li value="HTML" className="btn btn-link tech-filter">HTML</li>
                <li value="CSS" className="btn btn-link tech-filter">CSS</li>
                <li value="SCSS" className="btn btn-link tech-filter">SCSS</li>
                <li value="JavaScript" className="btn btn-link tech-filter">JavaScript</li>
                <li value="React" className="btn btn-link tech-filter">ReactJS</li>
                <li value="MySQL" className="btn btn-link tech-filter">MySQL</li>
                <li value="MongoDB" className="btn btn-link tech-filter">MongoDB</li>
                <li value="NodeJS" className="btn btn-link tech-filter">NodeJS</li>
                
                
            </ul> */}
            <div className="row">
            {projects.map(project => (
                <div className="image-row">
                <div className="image-container text-center">
                    <img className="project-img" src={require(`../images/${project.image}`)} alt={project.name}></img>
                        <div className="middle">
                            <p className="text inline">{project.name}, </p>
                            <p className="text">{project.languages.map(language => (
                                <div>{language}</div>
                            ))}</p>
                            <div className="project-link-container">
                            {project.github ? <a className="project-link link-btn btn" href={project.github} target="_blank" rel="noopener noreferrer">Github</a> : "" }
                            {project.netlify ? <a className="project-link link-btn btn" href={project.netlify} target="_blank" rel="noopener noreferrer">Netlify</a> : "" }
                            {project.codepen ? <a className="project-link link-btn btn" href={project.codepen} target="_blank" rel="noopener noreferrer">Codepen</a> : "" }
                            {project.heroku ? <a className="project-link link-btn btn" href={project.heroku} target="_blank" rel="noopener noreferrer">Heroku</a> : "" }
                            </div>
                            <div className="text project-description">
                            <span>{project.description}</span>
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