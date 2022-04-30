import React from 'react';
import { DataProfile, ErrorResponse } from '../api/data';

type UserProps = {
  data: DataProfile;
};

const Userinfo = ({ data }: UserProps) => {
  return (
    <>
      <div>{data.nickname}</div>
      <div>UID:{data.genshinUid}</div>
    </>
  );
};

export default Userinfo;
