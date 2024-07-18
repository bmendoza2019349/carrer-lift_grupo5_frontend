
import { Link } from 'react-router-dom';
import { useCourses } from '../../shared/hooks';

export const CourseCard = () => {
    const { courses, loading, error, refetch } = useCourses();

    if ( loading ) {
        return <p>Loading...</p>;
    }

    if ( error ) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {courses.map( ( course ) => (
                <div key={course._id} className="bg-white p-4 shadow rounded">
                    <img src={course.img} alt={course.nameCourse} className="w-full h-48 object-cover" />
                    <h2 className="text-xl font-bold mt-4">{course.nameCourse}</h2>
                    <p className="text-gray-600 mt-2">{course.descripcion}</p>
                    <Link to={`/course/${course._id}`} className="block mt-4 text-blue-600 font-semibold">Ingresar a Curso</Link>
                </div>
            ) )}
        </div>
    );
}