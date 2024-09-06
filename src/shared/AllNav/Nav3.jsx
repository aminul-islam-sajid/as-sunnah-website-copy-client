import React from 'react';
import logo from '../../assets/smLogo.png'
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const Nav3 = () => {
    const navList = <>
        <Link to={'/'}><li>home</li></Link>
        <li> <a>Parent$1</a> </li>
        <li> <a>Parent$2</a> </li>
        <li> <a>Parent$3</a> </li>
        <li> <a>Parent$4</a> </li>
        <li> <a>Parent$5</a> </li>
        <li> <a>Parent$6</a> </li>
        <li> <a>Parent$7</a> </li>
        <li> <a>Parent$8</a> </li>
        <li> <a>Parent$9</a> </li>
        <li> <a>Parent$10</a> </li>
        <li> <a>Parent$11</a> </li>
        <li> <a>Parent$12</a> </li>
        <li> <a>Parent$13</a> </li>
        <li> <a>Parent$14</a> </li>
        <li> <a>Parent$15</a> </li>
        <li> <a>Parent$16</a> </li>
        <li> <a>Parent$17</a> </li>
        <li> <a>Parent$18</a> </li>
        <li> <a>Parent$19</a> </li>
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
                <div className="hidden md:flex ">
                    <Container>
                        <ul className="md:flex-wrap align-middle gap-4 cursor-pointer menu-horizontal py-2">
                            {navList}
                        </ul>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Nav3;