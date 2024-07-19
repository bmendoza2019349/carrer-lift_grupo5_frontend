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
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="../public/imgLogoCarr.png" alt="Logo" className="w-11 h-11" />
                    <div className="text-white text-2xl font-semibold">CarrerLift </div>
                </div>
                <div className="flex space-x-9">
                    <a href={"/course"} className="text-gray-300 hover:text-white text-lg">Inicio</a>
                    <a href={"/addCourse"} className="text-gray-300 hover:text-white text-lg">Agregar curso</a>
                    <div className="relative">
                        <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-gray-300 hover:text-white text-lg focus:outline-none"
                        >
                            Opciones..
                        </button>
                        {isDropdownOpen && (
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg z-20"
                            >
                                <a href={"/assign"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Asignar cursos</a>
                                <a href={"/course/:id/coDelete"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Eliminar curso</a>
                                <a href="#marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Eliminar modulo</a>
                            </div>
                        )}
                    </div>
                    <a href={"/auth"} className="text-gray-300 hover:text-white text-lg">sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
