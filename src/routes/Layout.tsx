import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Layout = () => {
  return (
    <>
      <div className='flex'>
        <Nav />
        <main className='p-4'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
