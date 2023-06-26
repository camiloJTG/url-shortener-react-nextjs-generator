import * as yup from 'yup';

export const registerShortener = yup.object().shape({
   url: yup.string().trim().url('Ingrese una URL válida').required('URL no puede estar vacía')
});
