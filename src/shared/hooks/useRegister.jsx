import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState( false )

    const navigate = useNavigate()

    const register = async ( username, email, password ) => {
        setIsLoading( true )

        try {
            const response = await registerRequest( {
                username,
                email,
                password,
            } )
            setIsLoading( false )

            if ( response.error ) {
                return toast.error( response.e?.response?.data ) || 'Ocurrió un error al registrarse, intenta de nuevo.'
            }

            const { userDetails } = response.data

            navigate( '/auth' )
        } catch ( error ) {
            setIsLoading( false );
            console.error( 'Registration failed', error );
            toast.error( 'Ocurrió un error al registrarse, intenta de nuevo' );
        }
    }

    return {
        register,
        isLoading
    }
}