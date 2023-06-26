'use client';

import { FormEvent, useState } from 'react';
import Navbar from '@/components/common/navbar';
import RegisterShortener from '@/components/forms/registerShortener';
import Hero from '@/components/common/hero';
import { useForm } from '@/hooks/useForm';
import { generateUrlShortener } from '@/services/shortener';
import { Shortener } from '@/types/interfaces';

const ShortenerContainer = () => {
   const { formRef, getFormValues } = useForm();
   const [shortener, setShortener] = useState<Shortener>();
   const [error, setError] = useState<string | undefined>('');

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formValues = getFormValues();
      if (!formValues) return null;
      const result = await generateUrlShortener(formValues.url);

      typeof result === 'object' ? setShortener(result) : setError(result);
   };

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
      </div>
   );
};

export default ShortenerContainer;
