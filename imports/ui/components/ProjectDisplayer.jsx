import React from 'react';

const ProjectDisplayer = ({source}) => {
    return(
        <div className="projectDisplayer">
            <img style={{opacity: "0.4"}} src={source}/>
        </div>
    )
}

export default ProjectDisplayer;