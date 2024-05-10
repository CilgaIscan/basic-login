console.log(import.meta.env)
export const AUTH_HOST = import.meta.env.VITE_CTP_AUTH_URL;
export const PROJECT_KEY = import.meta.env.VITE_CTP_PROJECT_KEY;
export const CLIENT_ID = import.meta.env.VITE_CTP_CLIENT_ID;
export const CLIENT_SECRET = import.meta.env.VITE_CTP_CLIENT_SECRET;
export const SCOPES = import.meta.env.VITE_CTP_SCOPES.split(',');
