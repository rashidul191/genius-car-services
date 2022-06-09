import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: "150px"}} className='w-100 d-flex justify-content-center align-items-end'>
             <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;