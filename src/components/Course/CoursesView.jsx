import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoursesDescription } from "./CourseDetails";
import { useCoursesDetails } from "../../shared/hooks/useCoursesDetails";
import { LoadingSpinner } from '../LoadingSpinner'

export const CoursesView = () => {
    const { isFetching, getCourseDetails, coursesDetails } = useCoursesDetails();

    const { id } = useParams();

    useEffect(() => {
        getCourseDetails(id);
    }, [id]);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    const courses = coursesDetails.data.course;

    return (
        <div>
            <div>
                <CoursesDescription
                    id={courses._id}
                    img={courses.img}
                    userCreator={courses.userCreator}
                    nameCourse={courses.nameCourse}
                    descripcion={courses.descripcion}
                    modulos={courses.modulos}
                />
            </div>
        </div>
    )
}