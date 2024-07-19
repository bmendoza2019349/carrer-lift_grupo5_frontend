import { useNavigate } from "react-router-dom";
import { CoursesCard } from "../courses/CoursesCard";

export const Courses = ({ courses }) => {
    const navigate = useNavigate();

    const handleNavigateToCourse = (id) => {
        navigate(`/course/${id}`);
    };

    console.log("Courses data:", courses);

    return (
        <div className="publicaciones-container">
            {courses.map((p) => (
                    <CoursesCard
                        key={p._id}
                        id={p._id}
                        nameCourse={p.nameCourse}
                        userCreator={p.userCreator}
                        navigateToCourseHandler={handleNavigateToCourse}
                    />
                ))}
        </div>
    );
};