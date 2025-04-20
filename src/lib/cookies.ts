import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@tw/token');
};

export const setToken = (token: string) => {
  cookies.set('@tw/token', token);
};

export const removeToken = () => {
  cookies.remove('@tw/token');
};

export const setRedirect = (redirect: string) => {
  cookies.set('@tw/redirect', redirect);
};

export const getRedirect = () => {
  return cookies.get('@tw/redirect');
};