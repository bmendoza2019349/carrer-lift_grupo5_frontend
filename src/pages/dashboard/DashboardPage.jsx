import { LoadingSpinner } from '../../components/LoadingSpinner'
import { useUserDetails } from '../../shared/hooks'
import { Navbar } from '../../components/navbars/Navbar'
import { Sidebar } from '../../components/navbars/Sidebar'

import './dashboardPage.css'
export const DashboardPage = () => {
    const { isLogged } = useUserDetails()

    if ( !isLogged ) {
        return <LoadingSpinner />
    }

    return (
        <div className="dashboard-container">
            <Navbar />
            <Sidebar />
            <Content />
        </div>
    )

}