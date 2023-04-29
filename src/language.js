import React from 'react';
import './tailwind.css'
import node from './image/node.webp'
import php from './image/php.webp'
import python from './image/python.webp'
import react from './image/react.webp'
const features = [
  { name: 'Reactjs', image: react, des: '前端框架', has: '＃實時溫濕度網'},
  { name: 'Nodejs', image: node, des: '後端環境', has: '＃實時溫濕度網'},
  { name: 'Python', image: python, des: '爬蟲及硬體邏輯', has: '     ＃電腦比價網        ＃實時溫濕度網'},
  { name: 'PHP', image: php, des: '網頁邏輯撰寫', has: '＃電腦比價網'},
]

function Language() {
  return [
    <div className="bg-bgcolor">
      {/* lanuage */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:pt-24 sm:pb-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-titletxt sm:text-4xl bg-titlebg p-2 drop-shadow-md">熟悉的語言</h2>
          <p className="mt-4 text-xl text-txtcolor underline underline decoration-double">
            專案開發有接觸過的語言
          </p>
        </div>
      </div>
      <div className="mx-auto items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-y-16 lg:gap-x-20">
              {features.map((feature) => (
                <div key={feature.name} class="rounded p-5 shadow-lg bg-titlebg/75">
                  <img class="w-full"alt='lanpic' src={feature.image} width='40%' />
                  <div class="px-6 py-4">
                    <p className="font-bold text-xl text-gray-dark text-base text-center">{feature.name}</p>
                  </div>
                  <div class="px-4 pt-4 pb-2 text-center">
                    <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{feature.des}</span>
                    <span class="inline-block bg-white/60 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 whitespace-pre-wrap">{feature.has}</span>
                    {/* <span class="inline-block bg-titlebg rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{feature.has2}</span> */}
                  </div>
                </div>
            ))}
            </div>
          </div>
    </div>
  ];
}
export default Language;
