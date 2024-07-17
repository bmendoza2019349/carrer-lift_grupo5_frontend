import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState( false );
    const navigate = useNavigate();

    const login = async ( email, password ) => {
        setIsLoading( true );

        try {
            const response = await loginRequest( {
                email,
                password,
            } );

            setIsLoading( false );

            console.log( "Response from login:", response );

            if ( response.error ) {
                console.error( "Error during login:", response.error );
                return toast.error(
                    response.error.message ||
                    "Ocurrió un error al iniciar sesión, intenta de nuevo."
                );
            }

            const { userDetails } = response.data;

            console.log( "User details:", userDetails );

            // Aquí se almacenan los datos del usuario y el token en localStorage
            localStorage.setItem( 'user', JSON.stringify( userDetails ) )


            // Navegar a la página principal después del inicio de sesión exitoso
            navigate( "/" );

        } catch ( error ) {
            setIsLoading( false );
            console.error( "Error during login:", error );
            toast.error(
                "Ocurrió un error al iniciar sesión, intenta de nuevo."
            );
        }
    };

    return {
        login,
        isLoading,
    };
};