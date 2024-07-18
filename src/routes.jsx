import { Register } from './components/login/Register.jsx';
import { AuthPage } from './pages/auth/AuthPage.jsx'
import { ModulesList } from './components/Modules/GetModules.jsx';
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { AuthPage } from "./pages/auth/AuthPage";


const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/modules', element: <ModulesList />}
];

export default routes