import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 h-screen'>
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-xl font-semibold'>Page Not Found</p>
            <Link to={-1} className="btn">Go Back</Link>
        </div>
    );
};

export default Errorpage;