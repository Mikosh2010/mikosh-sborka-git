import React from 'react';
import { Link } from 'react-router-dom';
import './for-notfound/style.css';
import './UI/Notfound.css';

const NotFound = () => {
    return (
        <div className='content'>
            <h1>404</h1>
            <div className='desc'>Упс, извините но данная страница не была найдена.</div>
            <Link to="/" className='link'>На главную</Link>
        </div>
    );
}

export {NotFound};
