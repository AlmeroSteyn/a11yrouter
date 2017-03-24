import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Overview</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;