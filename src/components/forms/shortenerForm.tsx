const shortenerForm = () => {
   return (
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
         <div className='mx-auto max-w-lg text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl'>Get URL Shortener</h1>

            <p className='mt-4 text-gray-500'>Generate your shortened URL</p>
         </div>

         <form className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
            <div>
               <div className='relative'>
                  <input
                     type='url'
                     className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                     placeholder='Enter URL'
                  />
               </div>
            </div>

            <div className='flex items-center justify-between'>
               <button
                  type='submit'
                  className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
               >
                  Shorten URL
               </button>
            </div>
         </form>
      </div>
   );
};

export default shortenerForm;
