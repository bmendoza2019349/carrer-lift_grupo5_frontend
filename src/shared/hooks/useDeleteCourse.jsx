import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteCourse as deleteCourseRequest } from "../../services";

export const useDeleteCourse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const deleteCourse = async (id) => {
        setIsLoading(true);

        try {
            const response = await deleteCourseRequest(id);

            setIsLoading(false)

            if (response.error) {
                console.error(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al eliminar el curso, intenta de nuevo');
            }

            navigate('/course')
        } catch (error) {
            setIsLoading(false);
            console.error('Delete publicacion failed', error);
            toast.error('Ocurrió un error al eliminar el curso, intenta de nuevo');
        }
    }

    return{
        deleteCourse,
        isLoading
    }

}