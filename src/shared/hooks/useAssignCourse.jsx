import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { assignCourse as assignCourseRequest } from "../../services";

export const useAssignCourse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const assignCourse = async (codigo) => {
        setIsLoading(true)
        try {
            const response = await assignCourseRequest({
                codigo
            })

            setIsLoading(false)

            if (response.error) {
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al registrar la publicacion, intenta de nuevo')
            }
            navigate('/course');

        } catch (error) {
            setIsLoading(false);
            console.error('Add publicacion failed', error);
            toast.error('Ocurrió un error al agregar publicacion, intenta de nuevo');
        }
    };

    return {
        assignCourse,
        isLoading
    }
}
