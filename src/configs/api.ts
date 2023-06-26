const API = process.env.NEXT_PUBLIC_SHORTENER_API_URL_BASE;

export const apiConfig = {
   shortener: {
      generate: `${API}/`
   }
};
