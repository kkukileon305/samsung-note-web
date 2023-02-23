import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

const Note = () => {
  const { noteId } = useParams();

  return (
    <>
      <header className='shadow-md'>
        <div className='mx-auto max-w-[1060px] w-full p-4'>
          <Link to={'/'} className='block p-1 w-fit border border-black rounded-full'>
            <BsArrowLeft size={24} />
          </Link>
        </div>
      </header>
      <div className='max-w-[1060px] mx-auto w-full p-4'>{noteId}</div>
    </>
  );
};

export default Note;
