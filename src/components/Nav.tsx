import { AiOutlineSetting } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import menus from '../libs/menus';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleModal } from '../store/slices/modal';
import MenuItem from './items/MenuItem';

const Nav = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(store => store.modal);

  return (
    <nav className={`bg-gray-300 h-screen transition-[0.3s] rounded-r-xl ${modal ? 'w-[300px]' : 'w-[60px]'} p-4 overflow-x-hidden`}>
      <div className='flex w-[268px] justify-between mb-8'>
        <button onClick={() => dispatch(toggleModal())}>
          <FiMenu size={28} />
        </button>
        <button>
          <AiOutlineSetting size={28} />
        </button>
      </div>
      <div className='w-[268px]'>
        {menus.map(menu => (
          <MenuItem key={menu.title} menu={menu} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
