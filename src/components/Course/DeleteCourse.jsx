import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDeleteCourse } from "../../shared/hooks/useDeleteCourse";

export const DeleteCourse = () => {
    const { id } = useParams();
    const { deleteCourse, isLoading } = useDeleteCourse();

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

    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-5 md:space-y-0 md:space-x-5 mt-[1rem]">
            <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg border-none">
                    <h2 className="text-xl font-semibold">Deseas Eliminarla?</h2>
                    <button
                        onClick={handleDeleteCourse}
                        disabled={isLoading}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Eliminar curso
                    </button>
                </div>
            </div>
        </div>
    )
}