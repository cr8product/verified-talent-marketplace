import Link from 'next/link';

function Logo() {
  return (
    <h1 className='text-2xl text-white'>
      <Link href='/'>
        Veri<span className='text-indigo-300'>Freelance</span>
      </Link>
    </h1>
  );
}

export default Logo;
