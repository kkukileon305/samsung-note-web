import { Link } from 'react-router-dom';
import notes from '../libs/notes';

const All = () => {
  return (
    <>
      <h2 className='font-bold text-xl'>모든 노트</h2>

      <ul className='flex gap-4 flex-wrap mt-4'>
        {notes.map(note => (
          <li key={note.key} className=''>
            <Link className='w-32 aspect-[13/16] flex justify-center items-center bg-gray-400 rounded-xl' to={`/note/${note.key}`}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default All;
