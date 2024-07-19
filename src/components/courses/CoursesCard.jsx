
const CourseIma = ({url}) => {
    return(
        <div className="publicacion-ima-container">
            <img src={url} width='25%' height='25%' alt="Default publicacion" />
        </div>
    )
}

export const CoursesCard = ({
    nameCourse,
    id,
    descripcion,
    navigateToCourseHandler,
    userCreator
}) => {
    const handleNavigate = () => {
        navigateToCourseHandler(id);
    };

    return (
        <div onClick={handleNavigate}>
            <span>Nombre Curso: {nameCourse}</span>
            <span>Profesor: {userCreator}</span>
        </div>
    );
};