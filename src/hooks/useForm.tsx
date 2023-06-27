import { useRef } from 'react';

type useFormFields = {
   [key: string]: string;
};

export const useForm = () => {
   const formRef = useRef<HTMLFormElement>(null);

   const getFormValues = () => {
      const form = formRef.current;
      if (!form) return null;
      const formData = new FormData(form);
      const values: useFormFields = {};
      formData.forEach((value, key) => (values[key] = value.toString()));
      return { url: values['url'].toString().trim() };
   };

   const cleanForm = () => {
      const form = formRef.current;
      if (!form) return;
      form.reset();
   };

   return { formRef, getFormValues, cleanForm };
};
