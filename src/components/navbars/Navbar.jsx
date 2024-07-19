import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let timeoutId;

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    return (
        <nav className="bg-gray-800 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">MiLogo</div>
                <div className="flex space-x-6">
                    <a href="#home" className="text-gray-300 hover:text-white text-lg">Inicio</a>
                    <a href="#about" className="text-gray-300 hover:text-white text-lg">Acerca</a>
                    <div className="relative">
                        <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-300 hover:text-white text-lg focus:outline-none"
                        >
                            Servicios
                        </button>
                        {isDropdownOpen && (
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg z-20"
                            >
                                <a href="#web-design" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Diseño Web</a>
                                <a href="#seo" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SEO</a>
                                <a href="#marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Marketing</a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className="text-gray-300 hover:text-white text-lg">Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
