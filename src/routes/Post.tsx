import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <main>
      <header className='shadow-md'>
        <div className='max-w-[1060px] mx-auto w-full p-4'>
          <Link className='block p-1 w-fit border border-black rounded-full' to={'/'}>
            <BsArrowLeft size={24} />
          </Link>
        </div>
      </header>
    </main>
  );
};

export default Post;
