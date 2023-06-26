import { FormEventHandler, RefObject } from 'react';

export interface RegisterShortener {
   onRef: RefObject<HTMLFormElement>;
   onSubmit: FormEventHandler<HTMLFormElement>;
}

export interface DisplayModal {
   shortenedUrl: string | undefined;
   open: boolean;
   onClose: () => void;
}
