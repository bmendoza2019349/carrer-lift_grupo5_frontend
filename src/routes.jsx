import { Register } from './components/login/Register.jsx';
import { AuthPage } from './pages/auth/AuthPage.jsx'
import { ModulesList } from './components/Modules/GetModules.jsx';
import HomePage from './pages/homePage/HomePage.jsx';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <HomePage /> },
    { path: '/modules', element: <ModulesList />}
];

export default routes;
