import { useEffect } from "react";
//import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
//import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../shared/hooks";

export const DashboardPage = () => {
    //const { getPublicaciones, allPublicaciones, isFetching } = usePublicaciones();
    const { isLogged } = useUserDetails();
  
    useEffect(() => {
      //getPublicaciones(isLogged);
  
    }, []);
  
    //if (isFetching) {
    //  return <LoadingSpinner />;
    //}
  
    //console.log("Publicaciones: ", allPublicaciones); // Para verificar que las publicaciones estén llegando
    //<Content publicaciones={allPublicaciones || []} getPublicaciones={getPublicaciones} />
    return (
      <div className="dashboard-container">
        
        
      </div>
    );
  };