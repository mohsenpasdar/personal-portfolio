import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({ image, name, id }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/project/${id}`)} className='projectItem'>
            <h1>{name}</h1>
            <div style={{backgroundImage: `url(${image})`}} className='bgImage' >
            </div>
        </div>
    );
};

export default ProjectItem;