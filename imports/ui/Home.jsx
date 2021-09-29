import React from 'react';
import HomeNav from './HomeNav';

const Home = () => {
    return (
        <div className="home">
            
            <h1>danny nairn</h1>
            <h6>web developer</h6>
            <HomeNav/>
            <p>projects</p>
            <div className="icon-container">
                <i className="fas fa-angle-double-down"></i>   
            </div>
        </div>
    )
}

export default Home;