import React from 'react';
import logo from '../../assets/smLogo.png'
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const Nav3 = () => {
    const navList = <>
        <Link to={'/'}><li className='active:text-primaryColor active:border-b-1'>Item 1</li></Link>
        <li> <a>Parent</a> </li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
            <div className="navbar md:bg-nav3">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                    </div>
                    <img className='md:hidden' src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden md:flex">
                    <Container>
                        <ul className=" gap-12 cursor-pointer  menu-horizontal px-1">
                            {navList}
                        </ul>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Nav3;