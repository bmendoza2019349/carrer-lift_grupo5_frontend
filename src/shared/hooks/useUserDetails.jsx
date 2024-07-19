/* eslint-disable no-unused-vars */
import { useState } from "react";
import { logout as logoutHandler } from "./useLogout";

const getUserDetails = () => {
    const userDetails = localStorage.getItem( "user" );
    if ( userDetails ) {
        return JSON.parse( userDetails );
    }
    return null;
};

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState( getUserDetails() );

    const logout = () => {
        logoutHandler();
        setUserDetails( null );
    };

    return {
        isLogged: Boolean( userDetails ),
        username: userDetails?.username ? userDetails.username : "Guest",
        roleUser: userDetails?.roleUser,
        email: userDetails?.email ? userDetails.email : '',
        logout,
    };
};
