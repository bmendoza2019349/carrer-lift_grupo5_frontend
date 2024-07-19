import { useState } from "react";
import { addUrlsToModule as addUrlsRequest } from "../../services";

export const useAddUrlsToModule = () => {
    const [loading, setLoading] = useState( false );
    const [error, setError] = useState( null );
    const [success, setSuccess] = useState( false );

    const addUrls = async ( courseId, moduleId, urls ) => {
        setLoading( true );
        setError( null );
        setSuccess( false );

        try {
            const response = await addUrlsRequest( courseId, moduleId, urls )
            if ( response.error ) {
                console.error( 'Error presente: ', response.message )
            }
            setSuccess( true )
        } catch ( e ) {
            setError( e.message )
            setLoading( false )
        }
    }

    return { addUrls, loading, success, error }
}