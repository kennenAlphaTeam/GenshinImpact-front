import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export const cookieSet = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};
export const cookieGet = (name: string) => {
  return cookies.get(name);
};
