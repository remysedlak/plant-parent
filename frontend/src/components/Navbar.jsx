import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="flex justify-between items-center rounded-lg mb-2">
    <div className="flex items-center space-x-2">
        <h1 className="text-3xl text-normal text-white font-bold p-2 rounded-sm">Plant Parent</h1>
        <img src="/src/icons/garden-tree-svgrepo-com.svg" alt="tree" className="h-12"/>
    </div>
    <ul className="flex space-x-4 text-xl font-seminormal text-gray-700">
        <li className="transition duration-100 ease-in-out hover:bg-blue-100 bg-gray-100 border-gray-400 border-1 p-1 rounded-sm"><Link to="/">Home</Link></li>
        <li className="transition duration-100 ease-in-out hover:bg-blue-100 bg-gray-100 border-gray-400 border-1 p-1 rounded-sm"><Link to="/plants">Plants</Link></li>
        <li className="transition duration-100 ease-in-out hover:bg-blue-100 bg-gray-100 border-gray-400 border-1 p-1 rounded-sm"><Link to="/gallery">Gallery</Link></li>
        <li className="transition duration-100 ease-in-out hover:bg-blue-100 bg-gray-100 border-gray-400 border-1 p-1 rounded-sm"><Link to="/analytics">Analytics</Link></li>
        
        <li className="transition duration-100 ease-in-out hover:bg-blue-100 bg-gray-100 border-gray-400 border-1 p-1 rounded-sm"><Link to="/about">About</Link></li>
    </ul>
</nav>
    )
}
export default Navbar;