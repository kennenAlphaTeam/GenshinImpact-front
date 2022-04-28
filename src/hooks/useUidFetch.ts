import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAsync } from '../features/redux/constants/actionTypes';
import { RootState } from '../features/redux/reducers';

const useUidFetch = (userUid: string) => {
  const [uid, setUid] = useState(userUid);
  const uidData = useSelector((state: RootState) => state.uid_profile.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAsync.request(userUid));
  }, [uid]);
  return uidData;
};

export default useUidFetch;
