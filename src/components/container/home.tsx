'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Navbar from '@/components/common/navbar';
import Modal from '@/components/common/modal';
import Hero from '@/components/common/hero';
import RegisterShortener from '@/components/forms/registerShortener';
import { useForm } from '@/hooks/useForm';
import { Shortener } from '@/types/interfaces';
import { generateUrlShortener } from '@/services/shortener';

const ShortenerContainer = () => {
   const { formRef, getFormValues, cleanForm } = useForm();
   const [shortener, setShortener] = useState<Shortener | string>();
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [notification, setNotification] = useState<boolean>(false);
   const { executeRecaptcha } = useGoogleReCaptcha();

   const handleSubmit = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();

         if (!executeRecaptcha) return;
         const recaptchaToken = await executeRecaptcha('enquiryFormSubmit');

         const formValues = getFormValues();
         if (!formValues) return null;
         const result = await generateUrlShortener(formValues.url, recaptchaToken);
         if (typeof result === 'object') {
            setShortener(result);
            setOpenModal(true);
         }
         if (typeof result === 'string' || typeof result === 'undefined') {
            setShortener(result);
            setNotification(true);
         }
      },
      [executeRecaptcha]
   );

   const handleCloseModal = () => {
      setOpenModal(false);
      cleanForm();
   };

   const handleOpenNotification = () => setNotification(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
   });

   return (
      <div className='h-full leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed'>
         <Navbar />

         <div className='container pt-24 md:pt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
            <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
               <Hero />
               <RegisterShortener onRef={formRef} onSubmit={handleSubmit} />
            </div>

            <div className='w-full xl:w-3/5 p-12 overflow-hidden'>
               <img
                  className='mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6'
                  src='notebook.svg'
               />
            </div>
         </div>
         <Modal
            shortenedUrl={typeof shortener === 'object' ? shortener?.shortenedUrl : ''}
            onClose={handleCloseModal}
            open={openModal}
            onCloseNotification={handleOpenNotification}
         />

         {notification && (
            <div className='flex justify-center items-start absolute top-0 right-0 bottom-0 left-0'>
               <div
                  className={` ${
                     typeof shortener === 'string' ? 'bg-red-700' : 'bg-green-700'
                  } px-5 py-2 rounded-xl text-center`}
               >
                  <h1 className='text-md text-white'>
                     {typeof shortener === 'string' || typeof shortener === 'undefined'
                        ? shortener
                        : 'Shortened url copied !!!'}
                  </h1>
               </div>
            </div>
         )}
      </div>
   );
};

export default ShortenerContainer;
