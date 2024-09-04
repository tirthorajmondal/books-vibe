import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'border-2 font-bold px-5 py-3 rounded-lg text-first border-first' : 'font-bold border-2 px-5 py-3 rounded-lg'}>Home</NavLink>
        <NavLink to="/listed-books" className={({ isActive }) => isActive ? 'border-2 font-bold px-5 py-3 rounded-lg text-first border-first' : 'font-bold border-2 px-5 py-3 rounded-lg'}>Listed Books</NavLink>
        <NavLink to="/to-read" className={({ isActive }) => isActive ? 'border-2 font-bold px-5 py-3 rounded-lg text-first border-first' : 'font-bold border-2 px-5 py-3 rounded-lg'}>Pages to Read</NavLink>
    </>


    return (
        <div className="navbar bg-base-100 p-0 md:px-2 fixed z-10 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1  [&>*]:bg-white100">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" text-2xl font-black">Books Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 py-3 pr-2 lg:pr-0">
                <a className="btn bg-first text-white100">Sign In</a>
                <a className="btn bg-second text-white100">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;