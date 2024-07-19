import { useDeleteModule } from '../../shared/hooks/useDeleteModule';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const DeleteModule = () => {
    const {id} = useParams();
    const {deleteModule, isLoading} = useDeleteModule();

    const handleDeleteModule = () => {
        toast.promise(
            deleteModule(id),
            {
                loading: 'Eliminando modulo...',
                success: 'modulo eliminado exitosamente',
                error: (error) => `Ocurrió un error al eliminar el modulo: ${error}`
            }
        )
    }

    return(
        <div className='boton-eliminar'>
            <h2>Deseas Eliminar ?</h2>
            <button onClick={handleDeleteModule} disabled={isLoading}>Eliminar Modulo</button>
        </div>
    )
};