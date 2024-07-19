import { useNavigate } from "react-router-dom";
import { CoursesCard } from "./CoursesCard";
import CardMotion from "../dashboard/CardMotion";

export const Courses = ({ courses }) => {
    const navigate = useNavigate();

    const handleNavigateToCourse = (id) => {
        navigate(`/course/${id}`);
    };

    console.log("Courses data:", courses);

    return (
        <>
            <CardMotion />
            <div className="p-[4rem]">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mis Cursos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                    {courses.map((p) => (
                        <div
                            key={p._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                            onClick={() => handleNavigateToCourse(p._id)}
                        >
                            <img src={p.img} alt={p.nameCourse} className="w-full h-49 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{p.nameCourse}</h2>
                                <p className="text-gray-600">Creado por: {p.userCreator}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};
