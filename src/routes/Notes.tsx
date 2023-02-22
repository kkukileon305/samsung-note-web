import { useParams } from 'react-router-dom';
import menus from '../libs/menus';

const Notes = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className='font-bold text-xl'>{id ? menus.find(menu => menu.path === `/${id}`)?.title : '모든 노트'}</h2>
    </div>
  );
};

export default Notes;
