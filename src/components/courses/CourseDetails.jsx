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
        <div>
            <div><CoursesImg url={img} /></div>

            <div>
                <span>
                    User Creator: {userCreator}
                </span>
                <span>
                    Name Course: {nameCourse}
                </span>
                <span>
                    Descripcion: {descripcion}
                </span>

                <div>
                    <h3>Modulos</h3>
                    <div>
                        <button onClick={handleNavigateToAddModulesPage}>Agregar Modulos</button>
                    </div>
                    <div>
                        {modulos && modulos.map((modulos, index) => (
                            <li key={modulos._id}>
                                <div>
                                    <strong>Nombre Modulo: {modulos.nameModule}</strong>
                                    <strong>Videos: {modulos.videos}</strong>
                                    <strong>Description: {modulos.descriptionModule}</strong>
                                    <strong>Examenes: {modulos.exams}</strong>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}