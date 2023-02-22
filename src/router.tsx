import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import Notes from './routes/Notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Notes />,
      },
      {
        path: '/:id',
        element: <Notes />,
      },
    ],
  },
]);

export default router;
