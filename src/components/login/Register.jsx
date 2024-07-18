import React, { useState } from 'react';
import "./Login.css";
import { Input } from '../input/Input';

export const Register = ( { switchAuthHandler } ) => {
    const [formData, setFormData] = useState( {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: ''
    } );

    const handleChange = ( value, field ) => {
        setFormData( {
            ...formData,
            [field]: value
        } );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#902ef2] to-[#4b94f2]">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUAasnu122bRX5qsDW_l2hpKdaXs3bh6UJA&s" alt="Logo" className="w-30 h-20" />
                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Registro</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 text-sm text-gray-600">UserName</label>
                        <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Contraseña</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>
                    <div className="mb-6">
                        <Input
                            field="confirmPassword"
                            label="Confirmar contraseña"
                            type="password"
                            value={formData.confirmPassword}
                            onChangeHandler={handleChange}
                            placeholder="Confirmar contraseña"
                        />
                    </div>
                    <button type="submit" className="w-32 bg-blue-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">
                        Registro
                    </button>
                </form>
                <div className="text-center">
                    <button
                        className="text-sm text-cyan-600"
                        onClick={switchAuthHandler}
                    >
                        ¿Ya tienes una cuenta? Inicia sesión
                    </button>
                </div>
                <p className="text-xs text-gray-600 text-center mt-8">&copy; 2023 Luis Vaquin</p>
            </div>
        </div>
    );
}

export default Register;
