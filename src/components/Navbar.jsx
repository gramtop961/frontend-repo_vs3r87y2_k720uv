import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-gray-900">u</span>
          <span className="text-emerald-600">mart</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#categories" className="hover:text-emerald-600 transition-colors">Categories</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>
        <a
          href="#categories"
          className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition-colors text-sm font-semibold"
        >
          Shop Categories
        </a>
      </div>
    </header>
  );
};

export default Navbar;
