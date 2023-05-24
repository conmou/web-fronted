import React  from 'react';
import './tailwind.css'
import img from "./image/pic.webp"
import './App.css'
import Comment from './Comment';

function About() {
  return [
    <div className="bg-bg">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div id="wrapper" className='px-5 py-10 bg-all-bg drop-shadow-2xl'>
          <h2 className="text-3xl font-medium tracking-tight text-gary-dark sm:text-4xl bg-bg p-2 drop-shadow-md text-center">關於我</h2>
          <ul id="dynamic">
            <li><span className="text-2xl mt-4 text-white underline decoration-dashed">
              Hi ！ I'm YuJin
            </span></li>
          </ul>
          
          <div className='flex flex-row mt-4 text-txtcolor font-bold'>
            <div className='basis-1/4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <p class="text-center">
                  Student
              </p>
            </div>
            <div className='basis-1/4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p class="text-center">
                  NUTC
              </p>
            </div>
            <div className='basis-1/4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <p class="text-center">
                  I A
              </p>
            </div>
            <div className='basis-1/4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
              <a href='https://github.com/conmou'>
              <p class="text-center">
                  GitHub
              </p></a>
            </div>
          </div>
          <p className="mt-4 text-white font-bold ">
            我是陳宥蓁，目前就讀於臺中科技大學資訊應用菁英班。於學校有開發專案的經驗，接觸過前端後端及硬體的開發，目前仍在學習更多面向技術，希望未來能找到自己的定位！！！
          </p>
          <p className='mt-4 bg-bg text-gray-dark font-bold p-2 text-center'>工作經驗</p>
          <div className='flex flex-row  text-center'>
            {/* <p className='basis-1/2 py-1 text-txtcolor border-4 border-titlebg'>日漫咖啡打工1年</p>
            <p className='basis-1/2 py-1 text-txtcolor border-4 border-titlebg'>創科資訊實習5個月</p> */}
            <p className='mt-2 mr-1 basis-4/12 py-1 text-white font-bold bg-titlebg/50 rounded-xl'>＃日漫咖啡打工1年</p>
            <p className='mt-2 basis-4/12 py-1 text-white font-bold bg-titlebg/50 rounded-xl'>＃創科資訊實習5個月</p>
          </div>
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
export default About;
