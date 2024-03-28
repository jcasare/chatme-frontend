import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import RegisterScreen from './register';
import LoginScreen from './login';

const Screens = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<RegisterScreen />} path="/" />
        <Route element={<RegisterScreen />} path="/register" />
        <Route element={<LoginScreen />} path="/login" />
      </Routes>
    </NativeRouter>
  );
};

export default Screens;
