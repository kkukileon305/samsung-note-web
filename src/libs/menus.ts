import { GrNote } from 'react-icons/gr';
import { BsPerson, BsTrash2 } from 'react-icons/bs';
import { IconType } from 'react-icons/lib/esm/iconBase';

export type Menu = {
  path: string;
  title: string;
  icon: IconType;
};

const menus: Menu[] = [
  {
    path: '/',
    title: '모든 노트',
    icon: GrNote,
  },
  {
    path: '/share',
    title: '공유 노트함',
    icon: BsPerson,
  },
  {
    path: '/trash',
    title: '휴지통',
    icon: BsTrash2,
  },
];

export default menus;
