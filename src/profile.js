import React, { useEffect, useState } from 'react';
import './tailwind.css'
import img from "./image/pic.webp"
import './App.css'
import axios from 'axios'
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';

function Profile() {
  return [
    <div className="bg-bgcolor">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div id="wrapper" className='px-5 py-10 bg-spanbg drop-shadow-xl'>
          <h2 className="text-3xl font-bold tracking-tight text-titletxt sm:text-4xl bg-titlebg/50 p-2 drop-shadow-md">關於我</h2>
          <ul id="dynamic">
            <li><span className="text-2xl mt-4 text-xl text-white/50 underline underline decoration-dashed">
              Hi ！ I'm YuJin
            </span></li>
          </ul>
          <p className="mt-4 text-txtcolor">
            喜愛小動物 討厭爬蟲類
          </p>
          <p className="mt-4 text-txtcolor font-bold">
            <span className='grid grid-cols-4 px-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </span>
              Student & Front-end Engineer 
            <span className="ml-4 mt-4 text-txtcolor line-through font-normal"> 
              Maybe? 
            </span>
          </p>
          <p className="mt-4 text-txtcolor underline decoration-uderlinecolor">
            我是陳宥蓁，目前就讀於台中科技大學資訊應用菁英班。於學校有開發專案的經驗，保持好奇及野心，目前仍在學習更多面向技術，希望未來能找到自己的定位！！！
          </p>
        </div>
        <div className="grid grid-cols sm:gap-6 lg:gap-8">
          <img
            src={img}
            className="rounded-xl mx-auto item-conter"
            alt='me'
            width="80%"
          />
        </div>
      </div>
      <Comment />
    </div>
  ];
}
export default Profile;
