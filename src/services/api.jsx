import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create( {
    baseURL: 'https://carrer-lift-grupo5-backend.vercel.app/',
    timeout: 5000
} );

apiClient.interceptors.request.use(
    ( config ) => {
        const userDetails = localStorage.getItem( 'user' );

        if ( userDetails ) {
            const { token } = JSON.parse( userDetails );
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    ( e ) => {
        return Promise.reject( e );
    }
);

const checkResponseStatus = ( e ) => {
    const responseStatus = e?.response?.status;

    if ( responseStatus ) {
        ( responseStatus === 401 || responseStatus === 403 ) && logout();
    }
};

// Authentication
export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data );
    } catch ( e ) {
        checkResponseStatus( e );
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
        checkResponseStatus( e );
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
        checkResponseStatus( e );
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
        checkResponseStatus( e );
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
        checkResponseStatus( e );
        return {
            error: true,
            e
        };
    }
};

// Forms
export const getForms = async () => {
    try {
        return await apiClient.get( '/form' );
    } catch ( e ) {
        checkResponseStatus( e );
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
        checkResponseStatus( e );
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
        checkResponseStatus( e );
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
        checkResponseStatus( e );
        return {
            error: true,
            e
        };
    }
};
