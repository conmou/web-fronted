import React from 'react';
import './tailwind.css'
import './App.css'
import Lhome from './image/Laptop1.webp'
import Ehome from './image/EW1.webp'
import Emap from './image/EW2.webp'
import TH from './image/TH.webp'
import Paw from './image/Paws.png'

export function RappuTappu() {
  return [
    // <div className="bg-bgcolor">
    //   <div className="mx-auto grid rounded-lg max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-8 sm:px-6 sm:pt-4 lg:max-w-7xl lg:grid-cols-1 lg:px-16">
    //         <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
    //             <div className="pt-4">
    //               <hr class="hr-double-arrow"/>
    //               <p className="font-medium text-lg text-txtcolor bg-spanbg pl-4 py-2 mt-4">電腦比價網</p>
    //               <p className="text-sm text-white bg-white/25 p-4 mt-0 font-bold">為了減少購買者選購時，因為看規格看得眼花撩亂及需要來回比對價格，團隊開發以筆電的規格做篩選及查詢的網頁，期望使用者找到最符合需求的筆電。</p>
    //               <img src={ Lhome } alt='laptop' className="mx-auto items-center rounded-lg bg-txtcolor mt-8" />
    //             </div>
    //       </div>
    //   </div>
    // </div>
    <div className="bg-bg">
      <div className="flex flex-col whitespace-break-spaces text-lg text-white bg-all-bg/70 py-4 px-6 font-bold">
        <p>
           為了減少購買者選購時，因為看規格看得眼花撩亂及需要來回比對價格，團隊開發以筆電的規格做篩選及查詢的網頁，期望使用者找到最符合需求的筆電。
        </p>
        <div class="flex flex-row text-center">
          <p class="basis-1/3">
            ▲ 電腦比價
          </p>
          <p class="basis-1/3">
            ▲ 留言板
          </p>
          <p class="basis-1/3">
            ▲ 型號篩選
          </p>
        </div>
      </div>
        <img src={ Lhome } alt='laptop' className="mx-auto items-center rounded-lg py-8" />
    </div>
  ];
}
export function EatWalker() {
  return [
    <div className="bg-bg">
      <div className="flex flex-col whitespace-break-spaces text-lg text-white bg-all-bg/70 py-4 px-6 font-bold">
        <p>
          為了在短暫休息時間，達成較良好的用餐感受，團隊開發輔助使用者快速選擇餐廳，減少使用者選擇餐廳的時間；若閒暇時間想找人吃飯，也提供揪團功能，可邀請附近飯友加入。
        </p>
        <div class="flex flex-row text-center">
          <p class="basis-1/3">
            ▲ 探索餐廳
          </p>
          <p class="basis-1/3">
            ▲ 地圖導覽
          </p>
          <p class="basis-1/3">
            ▲ 揪團聚會
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:gap-6 lg:gap-8">
          <img src={ Ehome } alt='e1' className="rounded-lg py-8 mx-auto items-center" />
          <img src={ Emap } alt='e2' className="rounded-lg py-8 mx-auto items-center" />
      </div>
    </div>
  ];
}
export function GetTH() {
  return [
    <div className="bg-bg">
      <div className="flex flex-col whitespace-break-spaces text-lg text-white bg-all-bg/70 py-4 px-6 font-bold">
        <p>
          為了使養植物的用戶，更好的管控植物生長環境，團隊使用樹莓派開發搭配sensor感測環境溫度，並於網頁呈現實時溫濕度，以利用戶觀看。
        </p>
        <div class="flex flex-row text-center">
          <p class="basis-1/3">
            ▲ 即時資料
          </p>
          <p class="basis-1/3">
            ▲ 歷史資料
          </p>
          <p class="basis-1/3">
            ▲ 日夜間模式
          </p>
        </div>
      </div>
      <img src={ TH } alt='th' className="mx-auto items-center rounded-lg py-8 px-24" />
    </div>
  ];
}
export function Paws() {
  return [
    <div className="bg-bg">
      <div className="flex flex-col whitespace-break-spaces text-lg text-white bg-all-bg/70 py-4 px-6 font-bold">
        <p>
          為了使經常出差的上班族減少家裡貓狗沒人照顧的擔憂，本團隊開發一個能看到貓狗的狀況且能夠陪伴貓狗遊玩的產品，也能應用於寵物旅館，減少因為寵物旅客多而疏忽寵物的狀況。
        </p>
        <div class="flex flex-row text-center">
          <p class="basis-1/3">
            ▲ 即時畫面
          </p>
          <p class="basis-1/3">
            ▲ 活動圖表
          </p>
          <p class="basis-1/3">
            ▲ 物件辨識
          </p>
        </div>
      </div>
      <img src={ Paw } alt='paw' className="mx-auto items-center rounded-lg py-8 px-24" />
    </div>
  ];
}
