import React, { useCallback, useState } from 'react';

type ReturnTypes = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useOnChange = (initialValue: string): ReturnTypes => {
  const [data, setData] = useState(initialValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    },
    [data],
  );
  return [data, handler];
};

export default useOnChange;
