import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header-container'>
            <div className='header-left'>
            <img src="https://cdn-icons-png.flaticon.com/512/1211/1211821.png" alt="" />
            <h1>Skill Tester</h1>
            
            </div>
            <div>
            <Link className='stat' to='/'>Home</Link>
            <Link className='stat' to='/statistics'>Statistics</Link>
            <Link className='stat' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;