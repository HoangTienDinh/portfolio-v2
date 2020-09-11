import React from 'react'
import data from '../../data/data';

const { noteworthyProj } = data.portfolio

const NoteworthyProjects = () => {
    return (
        <div>
            {noteworthyProj.map((project, i) => (
                <div key={i}>{project.title}</div>
            ))}
        </div>
    )
}

export default NoteworthyProjects
