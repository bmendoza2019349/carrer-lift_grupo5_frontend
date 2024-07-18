import { AuthPage } from './pages/auth/AuthPage.jsx'
import { ModulesList } from './components/Modules/GetModules.jsx';
import { DashboardPage } from "./pages/dashboard/DashboardPage";



const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/modules', element: <ModulesList />}
];

export default routes