import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
    document.title = "Opps! Sorry Not Found";
    return (
        <div className="not-found text-center alert alert-warning">
            <h1 className="erro">Opps! Sorry Not Found.</h1>
            <button className="btn btn-warning"><Link to="/">Go Back </Link></button>
        </div>
    );
};

export default NoMatch;