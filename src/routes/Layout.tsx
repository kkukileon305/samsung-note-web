import { Outlet, ScrollRestoration } from 'react-router-dom';
import Nav from '../components/Nav';
import { useAppSelector } from '../store/hooks';

const Layout = () => {
  const modal = useAppSelector(store => store.modal);
  return (
    <>
      <div className='flex'>
        <Nav />
        <main className={`p-4 h-screen overflow-y-scroll transition-[0.3s] ${modal ? 'w-[calc(100%-300px)]' : 'w-[calc(100%-60px)]'}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
