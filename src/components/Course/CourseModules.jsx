import { useEffect, useState } from "react";
import { useUserDetails } from "../../shared/hooks";
import { getCourseById } from "../../services";

export const CourseModules = ( { courseId } ) => {
    const { email, roleUser } = useUserDetails()
    const [course, setCourse] = useState( null )
    const [courseCreator, setCourseCreator] = useState( false )

    useEffect( () => {
        const courseDetails = async () => {
            try {
                const course = await getCourseById( courseId )
                setCourse( course )
                if ( course.userCreator === email ) {
                    setCourseCreator( true )
                }
            } catch ( e ) {
                console.log( 'Error en los detalles de cursos: ', e )
            }
        }
        courseDetails();
    } ), [courseId, email]

    if ( !course ) {
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h1>{course.nameCourse}</h1>
            <p>{course.descripcion}</p>

            {course.modulos.map( ( modulo, index ) => (
                <div key={index}>
                    <h2>{modulo.nameModule}</h2>
                </div>
            ) )}
        </div>
    )

}