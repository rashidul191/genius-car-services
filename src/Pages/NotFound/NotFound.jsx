import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='App'>
            <h4>Error !!! sorry page not found</h4>
            <h1>404</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;