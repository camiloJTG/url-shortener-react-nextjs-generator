import { MouseEvent } from 'react';
import { DisplayModal } from '@/types/interfaces';

const Modal = ({ onClose, open, shortenedUrl }: DisplayModal) => {
   const handleOnCloseModal = (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      if (target.id === 'mainModal') onClose();
   };

   const handleCopyUrl = () => {
      navigator.clipboard.writeText(shortenedUrl!);
      onClose();
   };

   if (!open) return;

   return (
      <div
         id='mainModal'
         className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10'
         onClick={handleOnCloseModal}
      >
         <div className='max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500'>
            <div className='w-full'>
               <div className='m-8 my-20 max-w-[400px] mx-auto'>
                  <div className='mb-8'>
                     <h1 className='mb-4 text-3xl font-extrabold text-white text-center'>
                        Copy your shortened URL
                     </h1>
                     <p className='text-white text-center'>{shortenedUrl}</p>
                  </div>
                  <div className='space-y-4'>
                     <button
                        onClick={handleCopyUrl}
                        className='p-3 bg-blue-500 rounded-full text-white w-full font-semibold'
                     >
                        Copy shortener URL
                     </button>
                     <button
                        onClick={onClose}
                        className='p-3 bg-white border rounded-full w-full font-semibold'
                     >
                        Close
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
