import React from 'react';
import {Link} from "react-router-dom";
import GlassButton from '../components/GlassButton';

const Home = () => {
    return (
        <div className="home">
            <h1>danny nairn</h1>
            <h6>web developer</h6>
            <nav className="homeNav">
                <Link to="/about"><GlassButton text={"About"}/></Link>
                <Link to="/projects"><GlassButton text={"Projects"}/></Link>
            </nav>
        </div>
    )
}
export default Home;