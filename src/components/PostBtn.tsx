import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Btn = () => {
  return (
    <button className='fixed right-8 bottom-4 shadow shadow-black/50 rounded-full p-3'>
      <Link to={'/post'}>
        <BsPencil size={24} />
      </Link>
    </button>
  );
};

export default Btn;
