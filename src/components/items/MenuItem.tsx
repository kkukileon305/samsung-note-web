import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../../libs/menus';

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu: { icon: Icon, path, title } }: MenuItemProps) => {
  const { pathname } = useLocation();

  return (
    <Link className={`w-[268px] flex gap-4 mb-4`} to={path}>
      <button className={`rounded-xl w-[28px] aspect-square overflow-hidden flex justify-center items-center ${pathname === path ? 'bg-gray-400' : 'bg-gray-300'}`}>
        <Icon size={20} />
      </button>
      <h2>{title}</h2>
    </Link>
  );
};
export default MenuItem;
