import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleModal } from '../store/slices/modal';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
