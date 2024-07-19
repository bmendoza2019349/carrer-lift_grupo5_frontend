import { AuthPage } from './pages/auth/AuthPage.jsx'
import { DashboardPage } from './pages/dashboard/DashboardPage';


const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },

];

export default routes