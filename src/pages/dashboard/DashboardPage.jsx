import { LoadingSpinner } from '../../components/LoadingSpinner'
import Navbar from '../../components/navbars/Navbar'
import { useUserDetails } from '../../shared/hooks'
//import { Navbar } from '../../components/navbars/Navbar'
//import { Sidebar } from '../../components/navbars/Sidebar'

import './dashboardPage.css'
export const DashboardPage = () => {
    const { isLogged } = useUserDetails()



    return (
        <>
            <Navbar />
            <div className="dashboard-container">

                <div className="dashboard-content-container {
">
                    {isLogged ? (
                        <div>
                            <h1>Dashboard</h1>
                        </div>
                    ) : (
                        <div>
                            <h1>No Logged</h1>
                        </div>
                    )}
                </div>

            </div>
        </>
    )

}