import React, { useEffect, useState } from 'react';
import './App.css'
import './tailwind.css'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Language from './language';
import Experience from './experience';
import About from './aboutme';
import Login from './login';
import Register from './register';
import Header from './header'
import { Route, Routes } from 'react-router-dom';
import Profile from './profile';
import Project from './project';

function App() {
  return [
    // navbar
    <Header/>,
    <div className="bg-bg">
      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/language" element={ <Language /> } />
        <Route path="/project" element={ <Project /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </div>
  ];
}

export default App;
