import React from 'react';
import './tailwind.css'
import './App.css'
import Lhome from './image/Laptop1.webp'
import Ehome from './image/EW1.webp'
import Emap from './image/EW2.webp'
import TH from './image/TH.webp'

function Experience() {
  return [
    <div className="bg-bgcolor">
      <div className="mx-auto grid max-w-2xl items-center pt-16 px-4 sm:px-6 sm:py-16 sm:pb-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-titletxt sm:text-4xl bg-titlebg p-2 drop-shadow-md">經歷</h2>
          <p className="mt-4 text-xl text-txtcolor underline underline decoration-double">參與開發的專案</p>
        </div>
      </div>
      <div className="mx-auto grid rounded-lg max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-8 sm:px-6 sm:pt-4 lg:max-w-7xl lg:grid-cols-1 lg:px-16">
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
                <div className="pt-4">
                  <hr class="hr-double-arrow"/>
                  <p className="font-medium text-lg text-txtcolor bg-spanbg pl-4 py-2 mt-4">電腦比價網</p>
                  <p className="text-sm text-txtcolor bg-white/25 p-4 mt-0 font-bold">為了減少購買者選購時，因為看規格看得眼花撩亂及需要來回比對價格，團隊開發以筆電的規格做篩選及查詢的網頁，期望使用者找到最符合需求的筆電。</p>
                  <img src={ Lhome } alt='laptop' className="mx-auto items-center rounded-lg bg-txtcolor mt-8" />
                </div>
                <div className="pt-4">
                  <hr class="hr-double-arrow"/>
                  <p className="font-medium text-lg text-txtcolor bg-spanbg pl-4 py-2 mt-4">美食交友軟體</p>
                  <p className="text-sm text-txtcolor bg-white/25 p-4 mt-0 font-bold">為了在短暫休息時間，達成較良好的用餐感受，團隊開發輔助使用者快速選擇餐廳，減少使用者選擇餐廳的時間；若閒暇時間想找人吃飯，也提供揪團功能，可邀請附近飯友加入。</p>
                  <div className="grid grid-cols-2 sm:gap-6 lg:gap-8">
                    <img src={ Ehome } alt='e1' className="rounded-lg bg-txtcolor0 mt-8 mx-auto items-center" />
                    <img src={ Emap } alt='e2' className="rounded-lg bg-txtcolor mt-8 mx-auto items-center" />
                  </div>
                </div>
                <div className="pt-4">
                  <hr class="hr-double-arrow"/>
                  <p className="font-medium text-lg text-txtcolor bg-spanbg pl-4 py-2 mt-4">實時溫濕度網</p>
                  <p className="text-sm text-txtcolor bg-white/25 p-4 mt-0 font-bold">為了使養植物的用戶，更好的管控植物生長環境，團隊使用樹莓派開發搭配sensor感測環境溫度，並於網頁呈現實時溫濕度，以利用戶觀看。</p>
                  <img src={ TH } alt='th' className="rounded-lg bg-txtcolor mt-8 mx-auto items-center" />
                </div>
          </div>
      </div>
    </div>
  ];
}
export default Experience;
