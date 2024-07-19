import { useState } from "react";
import { toast } from "react-hot-toast";
import { getCourseById as getCourseByIdRequest } from "../../services";

export const useCoursesDetails = () => {
    const [coursesDetails, setCoursesDetails] = useState()

    const getCourseDetails = async(id) => {
        const responseData = await getCourseByIdRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.data || 'Error al cargar la informacion del curso'
            )
        }
        setCoursesDetails(responseData)
    }

    return{
        coursesDetails,
        isFetching: !coursesDetails,
        getCourseDetails
    }
}