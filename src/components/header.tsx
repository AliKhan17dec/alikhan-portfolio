'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black h-16 flex items-center px-4 md:px-8 w-full">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl md:text-3xl font-bold">
          Ali <span className="text-[#077b32]">Khan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 text-md">
          {['Home', 'About', 'Skills', 'Project', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="text-white hover:text-[#077b32] font-medium transition px-3 py-2"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm py-4 md:hidden text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
            {['Home', 'About', 'Skills', 'Project', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="text-white text-xl py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;