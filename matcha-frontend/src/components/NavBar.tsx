import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                {isLoggedIn ? (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
