import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create( {
    baseURL: 'https://carrer-lift-grupo5-backend.vercel.app/carrerLiftApi/v1',
    timeout: 5000
} );

apiClient.interceptors.request.use(
    ( config ) => {
        const userDetails = localStorage.getItem( 'user' );
        console.log( 'User details: ', userDetails )
        if ( userDetails ) {
            const token = JSON.parse( userDetails ).token
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    ( e ) => {
        return Promise.reject( e );
    }
);

// Authentication
export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const register = async ( data ) => {
    try {
        return await apiClient.post( '/auth/register', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

// Modules
export const getModules = async () => {
    try {
        return await apiClient.get( '/modules' );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const updateModule = async ( moduleId, data ) => {
    try {
        return await apiClient.put( `/modules/${moduleId}`, data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const postModule = async ( moduleId, data ) => {
    try {
        return await apiClient.post( `/modules/${moduleId}`, data );
    } catch ( e ) {
        checkResponseStatus( e );
        return {
            error: true,
            e
        };
    }
};

// Courses
export const getCourses = async () => {
    try {
        return await apiClient.get( '/course' );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const updateCourse = async ( courseId, data ) => {
    try {
        return await apiClient.put( `/course/${courseId}`, data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
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

// Forms
export const getForms = async () => {
    try {
        return await apiClient.get( '/form' );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const updateForm = async ( formId, data ) => {
    try {
        return await apiClient.put( `/form/${formId}`, data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

// Users
export const getUsers = async () => {
    try {
        return await apiClient.get( '/user' );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

export const updateUser = async ( data ) => {
    try {
        return await apiClient.put( '/user', data );
    } catch ( e ) {
        return {
            error: true,
            e
        };
    }
};

