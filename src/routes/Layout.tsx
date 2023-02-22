import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Layout = () => {
  return (
    <>
      <div className='flex'>
        <Nav />
        <main className='w-full p-4'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
