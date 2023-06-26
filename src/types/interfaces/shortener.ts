export interface Shortener {
   id?: string;
   originalUrl: string;
   shortenedUrl?: string;
}

export interface CommonErrorService {
   statusCode: number;
   message: string;
   error: string;
}
