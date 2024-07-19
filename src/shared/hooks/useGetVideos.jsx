import { useState, useEffect } from "react";
import { getVideos as getVideosRequest } from "../../services";

export const useGetVideos = ( courseId, moduleId ) => {
    const [videos, setVideos] = useState( [] );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( null );

    useEffect( () => {
        const videoList = async () => {
            try {
                const response = await getVideosRequest( courseId, moduleId );
                if ( response.error ) {
                    console.error( 'Error presente:', response.error )
                }
                setVideos( response.data );
            } catch ( e ) {
                setError( e );
                setLoading( false )
            }
        }

        videoList();
    }, [courseId, moduleId] )

    return { videos, loading, error }
}