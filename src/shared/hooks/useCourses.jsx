import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCoursesAlumno as getCoursesAlumnoRequest, getCourseById as getCourseIdRequest } from "../../services";

export const useCourses = () => {
    const [courses, setCourses] = useState( [] );

    const getCourses = async ( isLogged = false ) => {

        const coursesData = await getCoursesAlumnoRequest();
        console.log( "Fetched courses data:", coursesData.data );

        if ( coursesData.error ) {
            return toast.error(
                coursesData.e?.response?.data || 'Ocurrió un error al leer los cursos'
            );
        }
        if ( isLogged ) {
            return setCourses( {
                courses: coursesData.data.courses
            } )
        }
        setCourses( {
            courses: coursesData.data.courses

        } )
    };
    return {
        getCourses,
        isFetching: !Boolean( courses ),
        allCourses: courses?.courses

    };
};