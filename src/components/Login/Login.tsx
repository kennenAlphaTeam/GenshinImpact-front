import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <div>
      {error !== null && <h5>OAuth login error</h5>}
      <a href='https://localhost:8080/auth/oauth/login/google'>구글 로그인</a>
    </div>
  );
}
