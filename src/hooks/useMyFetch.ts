import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyCharacterAsync,
  getMyDailyAsync,
  getMyProfileAsync,
} from '../features/redux/constants/actionTypes';
import { RootState } from '../features/redux/reducers';

const useMyFetch = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.myprofile.data);
  const character = useSelector((state: RootState) => state.mycharacter.data);
  const daily = useSelector((state: RootState) => state.mydaily.data);
  useEffect(() => {
    dispatch(getMyProfileAsync.request());
    dispatch(getMyCharacterAsync.request());
    dispatch(getMyDailyAsync.request());
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getMyDailyAsync.request());
    }, 120000);
    return () => clearInterval(timer);
  }, []);
  return [profile, character, daily];
};

export default useMyFetch;
