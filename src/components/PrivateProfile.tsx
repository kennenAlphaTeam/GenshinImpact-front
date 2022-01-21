import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getResinDataAsync,
  selectResin,
} from '../features/userresin/userresin';

function PrivateProfile() {
  const dispatch = useDispatch();
  const data = useSelector(selectResin);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getResinDataAsync());
    }, 240000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}

export default PrivateProfile;
