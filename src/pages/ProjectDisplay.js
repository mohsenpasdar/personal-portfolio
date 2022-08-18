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
            <img src={project.image} />
            <p><b>Skills</b>: {project.skills}</p>
            <a href='to be created' target={'_blank'}><GithubIcon /></a>
        </div>
    );
};

export default ProjectDisplay;