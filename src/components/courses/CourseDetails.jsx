import { useNavigate } from "react-router-dom";
import axios from "axios";

const CoursesImg = ({ url }) => {
    return (
        <div className="div">
            <img src={url} width='100%' height='100%' alt="Default publicacion" />
        </div>
    )
}

export const CoursesDescription = ({
    userCreator,
    nameCourse,
    img,
    descripcion,
    modulos,
    id
}) => {
    const navigate = useNavigate();

    const handleNavigateToAddModulesPage = () => {
        navigate('./modules');
    };
    const handleNavigateToDeleteModulesPage = (modulesId) => {
        navigate(`./modules/${modulesId}`);
    };
    const handleNavigateToEditModulesPage = () => {
        navigate('./updateMo');
    };
    const handleNavigateToDeleteCoursesPage = (Id) => {
        navigate(`./courses/${Id}`);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-6xl mt-[7rem]">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-80 w-full object-cover md:h-full md:w-80" src={img} alt="Course Image" />
                </div>
                <div className="p-12">
                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">User Creator: {userCreator}</div>
                    <h1 className="block mt-1 text-3xl leading-tight font-medium text-black">Name Course: {nameCourse}</h1>
                    <p className="mt-2 text-gray-500">Descripcion: {descripcion}</p>
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold">Modulos</h3>
                        <button
                            className="mt-4 px-8 py-4 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-700"
                            onClick={handleNavigateToAddModulesPage}
                        >
                            Agregar Modulos
                        </button>
                        <ul className="mt-6 space-y-4">
                            {modulos && modulos.map((modulos, index) => (
                                <li key={modulos._id} className="p-6 bg-gray-100 rounded-md">
                                    <div>
                                        <strong className="block text-lg">Nombre Modulo: {modulos.nameModule}</strong>
                                        <span className="block text-gray-700">Videos: {modulos.videos}</span>
                                        <span className="block text-gray-700">Description: {modulos.descriptionModule}</span>
                                        <span className="block text-gray-700">Examenes: {modulos.exams}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}