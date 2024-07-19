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
            const token = JSON.parse( userDetails ).token;
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
    } catch ( e ) {
        return { error: true, e };
    }
};

export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const assignCourse = async ( data ) => {
    try {
        return await apiClient.post( '/auth/assign', data );
    } catch ( e ) {
        return { error: true, e };
    }
};

// ** Courses **
export const getCourses = async () => {
    try {
        return await apiClient.get( '/course' );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const updateCourse = async ( id, data ) => {
    try {
        return await apiClient.put( `/course/${id}`, data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const postCourses = async ( data ) => {
    try {
        return await apiClient.post( '/course', data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const deleteCourse = async ( id ) => {
    try {
        return await apiClient.delete( `/course/${id}` );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const getCourseById = async ( id ) => {
    try {
        return await apiClient.get( `/course/${id}` );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const getCoursesAlumno = async () => {
    try {
        return await apiClient.get( "/auth/mycourses" );
    } catch ( e ) {
        return { error: true, e };
    }
}

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
    } catch ( e ) {
        return { error: true, e };
    }
};

export const deleteVideo = async ( courseId, moduleId, videoName ) => {
    try {
        return await apiClient.delete( `/course/${courseId}/modules/${moduleId}/videos/${videoName}` );
    } catch ( e ) {
        return { error: true, e };
    }
};

// ** Modules **

export const createModule = async ( {id}, data ) => {
    try {
        return await apiClient.post( `/module/${id}`, data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const getModules = async ( courseId ) => {
    try {
        return await apiClient.get( `/modules/module/${courseId}` );
    } catch ( error ) {
        return { error: true, e };
    }
};

export const updateModule = async ( courseId, moduleId, data ) => {
    try {
        return await apiClient.put( `/modules/moduleEdit/${courseId}/${moduleId}`, data );
    } catch ( error ) {
        return { error: true, e };
    }
};

export const deleteModule = async ( courseId, moduleId ) => {
    try {
        return await apiClient.delete( `/modules/${courseId}/${moduleId}` );
    } catch ( error ) {
        return { error: true, e };
    }
};

// Obtener un módulo por ID
export const getModuleById = async ( courseId, moduleId ) => {
    try {
        return await apiClient.get( `/modules/courses/${courseId}/modules/${moduleId}` );
    } catch ( error ) {
        return { error: true, e };
    }
};

export const addUrlsToModule = async ( courseId, moduleId, urls ) => {
    try {
        return await apiClient.patch( `/modules/${courseId}/module/${moduleId}/urls`, { videos: urls } );
    } catch ( error ) {
        return { error: true, e };
    }
};

// ** Exams **

export const createExam = async ( courseId, data ) => {
    try {
        return await apiClient.post( `/exam/create/${courseId}`, data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const submitExamResponse = async ( data ) => {
    try {
        return await apiClient.post( '/exam/submit-response', data );
    } catch ( e ) {
        return { error: true, e };
    }
};

export const getStudentResponses = async () => {
    try {
        return await apiClient.get( '/exam/responses' );
    } catch ( e ) {
        return { error: true, e };
    }
};
