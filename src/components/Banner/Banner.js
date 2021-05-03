import React from 'react';
import './Banner.css';

const Banner = (props) => {
    const { banner, name, logo } =  props;
    const style = {
        backgroundImage: `url(${banner})`,
        opacity: '0.4'
    }
    return (
        <div className="banner">
            <div className="league-banner" style={style}>
                
            </div>
            <h1 className="league-name">{ name ? name : <img src={logo} alt="" width="400px"/>}</h1>
        </div>
    );
};

export default Banner;