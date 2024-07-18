import { AuthPage } from './pages/auth/AuthPage.jsx'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { uploadVideos } from './components/videos/uploadVideos.jsx';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    {path: '/upload', element: <uploadVideos/>}
];

export default routes