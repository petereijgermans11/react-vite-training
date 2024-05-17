import React from "react";
import { NavLink } from 'react-router-dom';

const HeaderComponent: React.FC = () => {

    return (
        <div className="header-container">
            <div className="logo">Boot finder</div>
            <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">AddPage</NavLink>
            </div>
        </div>
    )
}

export default HeaderComponent;

