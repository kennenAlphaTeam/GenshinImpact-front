import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Errorpage from './components/Pages/Errorpage/Errorpage';
import Intro from './components/Pages/Intro/Intro';
import Login from './components/Pages/Login/Login';
import MyProfile from './components/Pages/MyProfile/MyProfile';
import UidProfile from './components/Pages/UidProfile/UidProfile';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<UidProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/error' element={<Errorpage />} />
        <Route path='/' element={<Navigate replace to='/myprofile' />} />
      </Routes>
    </div>
  );
};
export default App;
