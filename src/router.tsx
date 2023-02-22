import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:id',
        element: <div>asd</div>,
      },
    ],
  },
]);

export default router;
