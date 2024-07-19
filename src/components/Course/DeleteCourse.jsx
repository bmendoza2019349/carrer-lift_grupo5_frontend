import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDeleteCourse } from "../../shared/hooks/useDeleteCourse";

export const DeleteCourse = () => {
    const {id} = useParams();
    const {deleteCourse, isLoading} = useDeleteCourse();

    const handleDeleteCourse = () => {
        toast.promise(
            deleteCourse(id),
            {
                loading: 'Eliminando curso...',
                success: 'curso eliminada exitosamente',
                error: (error) => `Ocurrió un error al eliminar el curso: ${error}`
            }
        )
    }

    return(
        <div className='boton-eliminar'>
            <h2>Deseas Eliminarla?</h2>
            <button onClick={handleDeleteCourse} disabled={isLoading}>Eliminar curso</button>
        </div>
        
    )
}