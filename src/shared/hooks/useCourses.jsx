import { useState, useEffect, useCallback } from 'react';
import { getCourses as getCoursesRequest, postCourses as postCoursesRequest } from '../../services';
import toast from 'react-hot-toast';

export const useCourses = () => {
    const [courses, setCourses] = useState( [] );
    const [loading, setLoading] = useState( true );
    const [error, setError] = useState( null );

    const fetchCourses = useCallback( async () => {
        setLoading( true );
        setError( null );
        try {
            const result = await getCoursesRequest();
            if ( result.error ) {
                throw new Error( result.message );
            }
            console.log( 'Cursos:', result.data )
            setCourses( Array.isArray( result ) ? result.data : [] );
        } catch ( err ) {
            setError( err.message );
            toast.error( err.message );
        }
        setLoading( false );
    }, [] );

    useEffect( () => {
        fetchCourses();
    }, [fetchCourses] );


    const postCourses = useCallback( async ( data ) => {
        setLoading( true );
        setError( null );
        try {
            const result = await postCoursesRequest( data );
            console.log( 'Post Data:', data )
            if ( result.error ) {
                throw new Error( result.message );
            }
            setCourses( ( existCursos ) => [...existCursos, result] );

        } catch ( err ) {
            setError( err.message )
            toast.error( err.message )
        }
    } )

    return { courses, loading, error, refetch: fetchCourses, post: postCourses };
};
