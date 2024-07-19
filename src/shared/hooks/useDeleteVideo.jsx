import { useState } from "react";
import { deleteVideo as deleteVideoRequest } from "../../services";

export const useDeleteVideo = () => {
    const [loading, setLoading] = useState( false );
    const [error, setError] = useState( null );
    const [success, setSuccess] = useState( false );

    const deleteVideo = async ( courseId, moduleId, videoName ) => {
        setLoading( true );
        setError( null );
        setSuccess( false );

        try {
            const response = await deleteVideoRequest( courseId, moduleId, videoName )
            if ( response.error ) {
                console.error( 'Error presente: ', error )
            }
            setSuccess( true )
        } catch ( e ) {
            setError( e.message )
            setLoading( false )
        }
    }
    return { deleteVideo, loading, error, success }
}