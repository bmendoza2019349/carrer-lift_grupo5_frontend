import axios from "axios";

// Configuración base del cliente API
const apiClient = axios.create( {
    baseURL: 'https://carrer-lift-grupo5-backend.vercel.app/carrerLiftApi/v1',
    timeout: 5000
} );

apiClient.interceptors.request.use(
    ( config ) => {
        const userDetails = localStorage.getItem( 'user' );
        if ( userDetails ) {
            const { token } = JSON.parse( userDetails ).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    ( error ) => Promise.reject( error )
);

// ** Authentication **
export const register = async ( data ) => {
    try {
        return await apiClient.post( '/auth/register', data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const assignCourse = async ( data ) => {
    try {
        return await apiClient.post( '/auth/assign', data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const getUserCourses = async () => {
    try {
        return await apiClient.get( '/auth/mycourses' );
    } catch ( error ) {
        return { error: true, error };
    }
};

// ** Courses **
export const getCourses = async () => {
    try {
        return await apiClient.get( '/course' );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const updateCourse = async ( courseId, data ) => {
    try {
        return await apiClient.put( `/course/${courseId}`, data );
    } catch ( error ) {
        return { error: true, error };
    }
};



export const deleteCourse = async ( courseId ) => {
    try {
        return await apiClient.delete( `/course/${courseId}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const getCourseById = async ( courseId ) => {
    try {
        return await apiClient.get( `/course/${courseId}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

// ** Modules **
export const uploadVideo = async ( courseId, moduleId, files ) => {
    try {
        const formData = new FormData();
        files.forEach( file => {
            formData.append( 'videos', file );
        } );

        return await apiClient.post( `/course/${courseId}/modules/${moduleId}/videos`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } );
    } catch ( error ) {
        return { error: true, message: error.response?.data?.message || error.message };
    }
};


export const getVideos = async ( courseId, moduleId ) => {
    try {
        return await apiClient.get( `/course/${courseId}/modules/${moduleId}/videos` );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const postCourses = async ( data ) => {
    try {
        const response = await apiClient.post( '/course/', data )
        return response.data;
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const deleteVideo = async ( courseId, moduleId, videoName ) => {
    try {
        return await apiClient.delete( `/course/${courseId}/modules/${moduleId}/videos/${videoName}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const postCourses = async ( data ) => {
    try {
        const response = await apiClient.post( '/course/', data )
        return response.data;
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

// ** Modules **

export const createModule = async ( courseId, data ) => {
    try {
        return await apiClient.post( `/module/${courseId}`, data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const getModules = async ( courseId ) => {
    try {
        return await apiClient.get( `/module/${courseId}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const updateModule = async ( courseId, moduleId, data ) => {
    try {
        return await apiClient.put( `/moduleEdit/${courseId}/${moduleId}`, data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const deleteModule = async ( courseId, moduleId ) => {
    try {
        return await apiClient.delete( `/${courseId}/${moduleId}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

// Obtener un módulo por ID
export const getModuleById = async ( courseId, moduleId ) => {
    try {
        return await apiClient.get( `/courses/${courseId}/modules/${moduleId}` );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const addUrlsToModule = async ( courseId, moduleId, urls ) => {
    try {
        return await apiClient.post( `/${courseId}/module/${moduleId}/urls`, { archivos: urls } );
    } catch ( error ) {
        return { error: true, error };
    }
};

// ** Exams **

export const createExam = async ( courseId, data ) => {
    try {
        return await apiClient.post( `/exam/create/${courseId}`, data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const submitExamResponse = async ( data ) => {
    try {
        return await apiClient.post( '/exam/submit-response', data );
    } catch ( error ) {
        return { error: true, error };
    }
};

export const getStudentResponses = async () => {
    try {
        return await apiClient.get( '/exam/responses' );
    } catch ( error ) {
        return { error: true, error };
    }
};
