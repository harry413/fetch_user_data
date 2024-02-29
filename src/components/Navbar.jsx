import React from 'react';


function Navbar({ onClick }) {
  return (
    <nav className="bg-gray-800 md:px-16 px-0 bg-opacity-75 shadow-2xl">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-14 items-center justify-between ">
        <a className='pr-9 font-bold text-white hover:underline'><span className='text-4xl text-gray-200'>User</span> <span className='text-2xl text-gray-400'>Data</span></a>
        <button 
            type="button" 
            className="bg-amber-800 inline-flex items-center justify-center rounded-md font-bold p-2 px-6 text-white hover:text-white focus:outline-none " 
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={onClick}>
                Get User
        </button>
      </div>
</nav>
  );
}

export default Navbar;
