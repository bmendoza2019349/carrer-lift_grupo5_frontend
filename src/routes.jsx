import { AuthPage } from './pages/auth/AuthPage.jsx'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { CoursesAdd } from './components/Courses/CoursesAdd.jsx';
import { Courses } from './components/Courses/Courses.jsx';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/*', element: <DashboardPage /> },
    { path: '/coursesAdd', element: <CoursesAdd /> },
    { path: '/courses', element: <Courses /> },
];

export default routes