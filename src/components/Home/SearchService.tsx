import SearchServiceButton from '../Form/SearchServiceButton';

function SearchService() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto text-gray-900 px-4'>
        <div className='flex justify-center items-center gap-10 flex-col py-20'>
          <p className='text-5xl sm:text-7xl font-medium tracking-wider max-w-lg text-center'>
          Verified 
<span className='text-indigo-600'>Jobs</span>
          </p>
          <p className='text-gray-500'>
          Crypto-Powered Talent Marketplace: Verifying Real Individuals on the Web3
          </p>
          <SearchServiceButton value={''} />
        </div>
      </div>
    </div>
  );
}

export default SearchService;
