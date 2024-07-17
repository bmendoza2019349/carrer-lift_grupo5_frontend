import { useState, useEffect, useCallback } from 'react';
import { getCourses as getCoursesRequest } from '../../services';
import toast from 'react-hot-toast'; // Ensure the path is correct based on your project structure

const useCourses = () => {
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
            setCourses( result );
        } catch ( err ) {
            setError( err.message );
            toast.error( err.message );
        } finally {
            setLoading( false );
        }
    }, [] );

    useEffect( () => {
        fetchCourses();
    }, [fetchCourses] );

    return { courses, loading, error, refetch: fetchCourses };
};

export default useCourses;
