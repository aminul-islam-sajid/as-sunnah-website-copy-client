import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderLine = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-lightSecondary py-2 px-6 block rounded" : "hover:text-primaryColor py-2 px-6 block rounded"
            }
        >
            {children}
        </NavLink>
    );
};

export default UnderLine;
