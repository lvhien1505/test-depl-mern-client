import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hello moi nguoi day la trang home.</h1>
            <Link to="/test"><button>Test</button></Link>
            <Link to="/status"><button>Status</button></Link>
        </div>
    )
}

export default Home
