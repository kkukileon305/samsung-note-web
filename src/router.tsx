import { createBrowserRouter } from 'react-router-dom';
import All from './routes/All';
import Layout from './routes/Layout';
import Note from './routes/Note';
import Post from './routes/Post';
import Share from './routes/Share';
import Trash from './routes/Trash';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <All />,
      },
      {
        path: '/share',
        element: <Share />,
      },
      {
        path: '/trash',
        element: <Trash />,
      },
    ],
  },
  {
    path: '/note/:noteId',
    element: <Note />,
  },
  {
    path: '/post',
    element: <Post />,
  },
]);

export default router;
