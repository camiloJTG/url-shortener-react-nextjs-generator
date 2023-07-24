'use client';

import Home from '@/components/container/home';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Generator = () => {
   return (
      <div>
         <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY_WEB!}>
            <Home />
         </GoogleReCaptchaProvider>
      </div>
   );
};

export default Generator;
