import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import folders from '../libs/folders';
import menus from '../libs/menus';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleModal } from '../store/slices/modal';
import MenuItem from './items/MenuItem';
import { Folder } from '../libs/folders';

const Nav = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(store => store.modal);

  const [curMenu, setCurMenu] = useState<boolean[]>([...new Array(folders.length)].fill(false));

  const changeCurMenu = (index: number) => {
    const changedMenu = curMenu.map((cur, idx) => (idx === index ? !curMenu[index] : cur));

    setCurMenu(changedMenu);
  };

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

      <div className='h-0.5 bg-gray-700 mb-4' />

      {folders.map((folder, index) => (
        <div key={folder.key} className='select-none'>
          <div className={`p-2 cursor-pointer mb-4 ${curMenu[index] ? 'bg-gray-500' : ''}`} onClick={() => changeCurMenu(index)}>
            {folder.title}
          </div>

          {curMenu[index] &&
            folder.children?.map(folder => (
              <div key={folder.key} className='p-2 pl-6 mb-4'>
                {folder.title}
              </div>
            ))}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
