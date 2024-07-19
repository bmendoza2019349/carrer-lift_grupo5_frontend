import { AuthPage } from './pages/auth/AuthPage.jsx'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { uploadVideos } from './components/videos/uploadVideos.jsx';
import { ModulesList } from './components/Modules/GetModules.jsx';
import { CreateModule } from './components/Modules/CreateModule.jsx';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/upload', element: <uploadVideos/>},
    { path: '/getModules', element: <ModulesList/>},
    { path: '/createModule', element: <CreateModule/>}
];

export default routes