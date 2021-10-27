import React from "react";
import {Link} from "react-router-dom";
import ProjectDisplayer from "../components/ProjectDisplayer";

const Projects= () => {
    return (
        <div className="projects">
            <ProjectDisplayer source={"./pixelToEm.png"}/>
        </div>
    )
}

export default Projects;