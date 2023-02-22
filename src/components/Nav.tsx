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
        <button className={`rounded-xl p-1 ${modal ? 'bg-gray-400' : 'bg-gray-300'}`} onClick={() => dispatch(toggleModal())}>
          <FiMenu size={20} />
        </button>
        <button>
          <AiOutlineSetting size={28} />
        </button>
      </div>

      {menus.map(menu => (
        <MenuItem key={menu.title} menu={menu} />
      ))}

      <div className='h-0.5 bg-gray-700' />
    </nav>
  );
};

export default Nav;
