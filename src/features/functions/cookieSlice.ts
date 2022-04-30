const cookieSlice = (cookie: string) => {
  const cookie_sliced: string = cookie
    .split(' ')
    .map((str: string) => str.replace(/(\_g|cto).*/, ''))
    .join(' ')
    .trim();
  return cookie_sliced;
};

export default cookieSlice;
