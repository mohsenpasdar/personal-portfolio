import React from 'react';
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectList';
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = projectList[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <a href={project.url} target={'_blank'}><img src={project.image} /></a>
            <p><b>Skills</b>: {project.skills}</p>
            <a href={project.github} target={'_blank'}><GithubIcon /></a>
        </div>
    );
};

export default ProjectDisplay;