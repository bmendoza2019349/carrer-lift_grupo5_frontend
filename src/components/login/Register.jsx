import React, { useState } from 'react';
import "./Login.css";
import { Input } from '../input/Input';

import {
    emailValidationMessage,
    validatePasswordMessage,
    passwordConfirmationMessage,
    validateUsernameMessage,
    validateUsername,
    validateConfirPassword,
    validateEmail,
    validatePassword,
} from "../../shared/validators";
import { useRegister } from "../../shared/hooks";

export const Register = ( { switchAuthHandler } ) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState( {
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
        passwordConfir: {
            value: "",
            isValid: false,
            showError: false,
        },
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
    } );

    const handleInputValueChange = ( value, field ) => {
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        } ) );
    };

    const handleInputValidationOnBlur = ( value, field ) => {
        let isValid = false;
        switch ( field ) {
            case "email":
                isValid = validateEmail( value );
                break;
            case "password":
                isValid = validatePassword( value );
                break;
            case "passwordConfir":
                isValid = validateConfirPassword( formState.password.value, value );
                break;
            case "username":
                isValid = validateUsername( value );
                break;
            default:
                break;
        }
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        } ) );
    };

    const handleRegister = ( event ) => {
        event.preventDefault();
        register( formState.username.value, formState.email.value, formState.password.value, );
    };

    const isSubmitButtonDisabled = isLoading ||
        !formState.password.isValid ||
        !formState.email.isValid ||
        !formState.passwordConfir.isValid ||
        !formState.username.isValid;

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
                        <Input
                            field="username"
                            label="Username"
                            value={formState.username.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.username.showError}
                            validationMessage={validateUsernameMessage}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                        <Input
                            field="email"
                            label="Email"
                            value={formState.email.value}
                            onChangeHandler={handleInputValueChange}
                            type="text"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.email.showError}
                            validationMessage={emailValidationMessage}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Contraseña</label>
                        <Input
                            field="password"
                            label="Password"
                            value={formState.password.value}
                            onChangeHandler={handleInputValueChange}
                            type="password"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.password.showError}
                            validationMessage={validatePasswordMessage}
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            field="passwordConfir"
                            label="Passowrd Confirmation"
                            value={formState.passwordConfir.value}
                            onChangeHandler={handleInputValueChange}
                            type="password"
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.passwordConfir.showError}
                            validationMessage={passwordConfirmationMessage}
                        />
                    </div>
                    <button onClick={handleRegister} disabled={isSubmitButtonDisabled} className="w-32 bg-blue-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">
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
