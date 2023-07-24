import { apiConfig } from '@/configs/api';
import { CommonErrorService, Shortener } from '@/types/interfaces';
import { registerShortener } from '@/types/schemas/shortener';

const { shortener } = apiConfig;

export const generateUrlShortener = async (url: string, token: string) => {
   try {
      await registerShortener.validate({ url }, { abortEarly: true });

      const resp = await fetch(shortener.generate, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ url, recaptchaToken: token })
      });

      if (resp.ok) {
         const data: Shortener = await resp.json();
         return data;
      }

      if (resp.status >= 400 || resp.status < 500) {
         const { message }: CommonErrorService = await resp.json();
         return message;
      }
   } catch (error: any) {
      return error.message;
   }
};
