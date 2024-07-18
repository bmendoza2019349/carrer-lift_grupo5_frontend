import React from 'react';
import { useCourses } from '../../shared/hooks';

export const Courses = () => {
    const { courses, loading, error, refetch } = useCourses();

    if ( loading ) {
        return <p>Loading...</p>;
    }

    if ( error ) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Courses</h1>
            <button onClick={refetch}>Refresh Courses</button>
            <ul>
                {courses.map( ( course ) => (
                    <li key={course._id}>
                        <h2>{course.nameCourse}</h2>
                        <p>{course.descripcion}</p>
                        <h3>Modules</h3>
                        <ul>
                            {course.modulos.map( ( module ) => (
                                <li key={module._id}>
                                    <h4>{module.nameModule}</h4>
                                    <p>{module.descriptionModule}</p>
                                </li>
                            ) )}
                        </ul>
                    </li>
                ) )}
            </ul>
        </div>
    );
};
