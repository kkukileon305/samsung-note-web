import { Link } from 'react-router-dom';
import { Menu } from '../../libs/menus';

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu: { icon: Icon, path, title } }: MenuItemProps) => {
  return (
    <Link className='flex gap-4 mb-4' to={path}>
      <button>
        <Icon size={28} />
      </button>
      <h2>{title}</h2>
    </Link>
  );
};
export default MenuItem;
