import { AuthPage } from './pages/auth/AuthPage.jsx'
import { ModulesList } from './components/Modules/GetModules.jsx';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Login } from './components/login/Login.jsx'
import { Register } from './components/login/Register.jsx';
import { Courses } from './components/Courses/Courses.jsx';
import { Input } from './components/Courses/Courses.jsx';
import { ModulesList } from './components/Modules/GetModules.jsx';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/modules', element: <ModulesList />},
    { path: '/login', element: <Login/>},
    { path: '/register', element: <Register/>},
    { path: '/courses', element: <Courses/>},
    { path: '/imput', element: <Input/>},
    { path: '/modules', element: <ModulesList/>}
];

export default routes