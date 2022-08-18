import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/projectList';
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {projectList.map((project, idx) => (
                    <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
                ))}
            </div>

        </div>
    );
};

export default Projects;