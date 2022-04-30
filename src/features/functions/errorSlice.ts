const errorSlice = (error_string: string) => {
  const errorCode: string | undefined = error_string.split(' ').pop();
  return errorCode;
};

export default errorSlice;
