import { FormEventHandler, RefObject } from 'react';

export interface RegisterShortener {
   onRef: RefObject<HTMLFormElement>;
   onSubmit: FormEventHandler<HTMLFormElement>;
}
