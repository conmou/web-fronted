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
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Profile from './profile';

function App() {
  return [
    // navbar
    <Header/>,
    <div className="bg-bgcolor">
      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/language" element={ <Language /> } />
        <Route path="/experience" element={ <Experience /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </div>
  ];
}

export default App;
