import { AuthPage } from './pages/auth/AuthPage.jsx'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { uploadVideos } from './components/videos/uploadVideos.jsx';
import { ModulesList } from './components/Modules/GetModules.jsx';
import { CreateModule } from './components/Modules/CreateModule.jsx';
import { UpdateModule } from './components/Modules/PutModule.jsx';
import { DeleteModule } from './components/Modules/DeleteModule.jsx';
import { UpdateCourse } from './components/courses/PutCourse.jsx';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/upload', element: <uploadVideos/>},
    { path: '/getModules', element: <ModulesList/>},
    { path: '/createModule', element: <CreateModule/>},
    { path: '/putModule', element: <UpdateModule/>},
    { path: '/deleteModule', element: <DeleteModule/>},
    { path: '/putCourse', element: <UpdateCourse/>}
];

export default routes