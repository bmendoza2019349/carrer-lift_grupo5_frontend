import { useDeleteModule } from '../../shared/hooks/useDeleteModule';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const DeleteModule = () => {
    const { id } = useParams();
    const { deleteModule, isLoading } = useDeleteModule();

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

    return (
        <div className="flex flex-col md:flex-row justify-center items-center  space-y-5 md:space-y-0 md:space-x-5 mt-[1rem] h-auto">

            <button
                onClick={handleDeleteModule}
                disabled={isLoading}
                className="w-[45%] bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-lg hover:from-red-600 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:scale-105 mr-[22rem]"
            >
                Eliminar Módulo
            </button>

        </div>
    )
};