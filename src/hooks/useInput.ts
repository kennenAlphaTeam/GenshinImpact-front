import React, { useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [data, setData] = useState<string>(initialValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setData(value);
    },
    [data],
  );
  return [data, handler];
};
