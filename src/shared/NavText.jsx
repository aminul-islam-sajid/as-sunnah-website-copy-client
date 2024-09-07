import React from 'react';
import { NavLink } from 'react-router-dom';

const NavText = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "text-lightSecondary border-b-1  active py-2  block"
                        : "hover:text-primaryColor py-2 hover:border-b-1  block rounded"
            }
        >
            {children}
        </NavLink>
    );
};

export default NavText;
