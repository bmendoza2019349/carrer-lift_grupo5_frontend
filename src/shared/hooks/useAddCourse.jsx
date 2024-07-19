import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postCourses as postCoursesRequest } from "../../services";

export const useAddCourse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const postCourses = async (img, nameCourse, descripcion) => {
        setIsLoading(true)

        try {
            const response = await postCoursesRequest({
                img,
                nameCourse, 
                descripcion, 
                
            })

            setIsLoading(false)

            if(response.error){
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al registrar la publicacion, intenta de nuevo')
            }
            navigate('/courses');

        } catch (error) {
            setIsLoading(false);
            console.error('Add publicacion failed', error);
            toast.error('Ocurrió un error al agregar publicacion, intenta de nuevo');
        }
    }

    return {
        postCourses,
        isLoading
    }
}
