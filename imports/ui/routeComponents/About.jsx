import React from "react";
import {Link} from "react-router-dom";
import GlassButton from "../components/GlassButton";

const About = () => {
    return (
        <div className="about">
           <h1>About Page</h1>
            <Link to="/">Home</Link>
            {/* <Link to="/projects">Projects</Link> */}
        </div>
    )
}

export default About;