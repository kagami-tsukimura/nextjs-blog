const createBlogPage = () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px12'>
      <h2 className='text-2xl font-bold mb-4'>新規作成</h2>
      <form className='bg-slate-200 p-6 rounded shadow-lg'>
        <div className='mb-4 bg-slate-200'>
          <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input
            type='text'
            className='shadow border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-none'
          />
        </div>
        <div className='mb-4 bg-slate-200'>
          <label className='text-gray-700 text-sm font-bold mb-2'>
            タイトル
          </label>
          <input
            type='text'
            className='shadow border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-none'
          />
        </div>
        <div className='mb-4 bg-slate-200'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea className='shadow border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-none' />
        </div>
        <button
          type='submit'
          className='py-2 px-4 border rounded-md bg-orange-300'
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default createBlogPage;