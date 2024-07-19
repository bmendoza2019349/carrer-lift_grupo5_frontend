import { useEffect } from "react";
import { LoadingSpinner } from '../../components/LoadingSpinner'
import Navbar from '../../components/navbars/Navbar'
import { useUserDetails } from '../../shared/hooks'
import { Content } from "../../components/dashboard/Content";
import { useCourses } from "../../shared/hooks/useCourses";


import './dashboardPage.css'
export const DashboardPage = () => {
    const { getCourses, allCourses, isFetching } = useCourses();
    const { isLogged } = useUserDetails();

    useEffect(() => {
        getCourses(isLogged);

    }, []);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    return (
        <div className="dashboard-container">
            <Navbar />
            <Content courses={allCourses || []} getCourses={getCourses} />
        </div>
    );

}