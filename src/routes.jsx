import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/_layouts/app';
import { Cards } from './pages/app/cards/cards';
import { NotFound } from './pages/404';
import { Home } from './pages/app/home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cards',
                element: <Cards />,
            },
        ],
    },
]);
