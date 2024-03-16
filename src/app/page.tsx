import Image from "next/image";
import Uylar from "./Uylar";
import Foot from "./Foot";

export default function Home() {
  return (
    <div className="bg-[#F2F2F2;]">

      <header className="bg-[#211A1D] text-white lg:flex lg:items-center lg:justify-center">
            <div className="flex justify-between px-4 pt-3 lg:w-[830px] lg:py-4">
                <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0703 25.1859V39.3803H16.4353C19.3837 39.3803 22.0591 38.9253 24.4615 38.0153C26.8639 37.0689 28.9205 35.7585 30.6313 34.0841C32.3421 32.3733 33.6525 30.3349 34.5625 27.9689C35.5089 25.5665 35.9821 22.8911 35.9821 19.9427C35.9821 17.2855 35.5635 14.7921 34.7263 12.4625C33.8891 10.0965 32.6515 8.03987 31.0135 6.29267C29.3755 4.54546 27.3371 3.16226 24.8983 2.14306C22.4595 1.12386 19.6385 0.614258 16.4353 0.614258H15.0703V7.5293H19.3759C20.5596 7.5293 21.6522 7.79247 22.6537 8.31882C23.6553 8.82124 24.5089 9.49114 25.2145 10.3285C25.9429 11.142 26.5119 12.087 26.9217 13.1636C27.3314 14.2163 27.5362 15.281 27.5362 16.3576C27.5362 17.8409 27.229 19.2286 26.6144 20.5205C25.9998 21.7885 25.1462 22.8293 24.0536 23.6427L29.1751 33.0093H21.6636L17.3956 25.1859H15.0703ZM15.0703 19.085H19.1028C19.5125 19.085 19.8881 18.8458 20.2295 18.3673C20.5937 17.8888 20.7758 17.2189 20.7758 16.3576C20.7758 15.4724 20.571 14.8025 20.1612 14.3479C19.7515 13.8694 19.3418 13.6301 18.9321 13.6301H15.0703V19.085Z" fill="#FFDF42"/>
                        <path d="M10.975 28.1862V10.7148H9.61001L1.875 20.3606V22.1806H20.075" stroke="url(#paint0_linear_1_16181)" strokeWidth="3" />
                        <defs>
                          <linearGradient id="paint0_linear_1_16181" x1="12.34" y1="21.6349" x2="21.44" y2="21.6349" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#211A1D" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="52" viewBox="0 0 92 52" fill="none">
                        <path d="M19.2227 51.3925V0.498047L21.0147 0.498047C25.2201 0.498047 28.9237 1.16708 32.1255 2.50515C35.3273 3.84322 38.0034 5.65917 40.1539 7.95301C42.3044 10.2468 43.9292 12.9469 45.0283 16.0531C46.1274 19.1116 46.677 22.385 46.677 25.8736C46.677 29.7444 46.0557 33.2569 44.8132 36.4109C43.6185 39.5171 41.8982 42.1933 39.6521 44.4393C37.4061 46.6376 34.706 48.3579 31.552 49.6004C28.398 50.7951 24.8856 51.3925 21.0147 51.3925H19.2227ZM30.2139 23.3164C30.2139 21.3571 30.2139 20.1352 30.2139 18.5376C30.2139 17.4838 30.2139 16.9344 30.2139 16.0531C29.2582 14.9062 30.2139 15.3579 30.2139 14.9535C30.2139 13.7588 30.2139 13.1615 30.2139 12.684V39.2065V37.6529C30.2139 38.0977 30.2139 36.7362 30.2139 36.4109C30.2139 35.3985 30.2139 35.2635 30.2139 34.6661C30.2139 32.4366 30.2139 36.4109 30.2139 26.9006C30.2139 25.1085 30.2139 25.228 30.2139 23.3164Z" fill="#FFDF42"/>
                        <path d="M10.2617 43.0289V9.57715H24.8749C26.4289 9.57715 27.8633 9.92266 29.1782 10.6137C30.4931 11.2733 31.6137 12.1528 32.5401 13.2521C33.4964 14.3201 34.2435 15.5608 34.7814 16.9742C35.3193 18.3563 35.5883 19.754 35.5883 21.1675C35.5883 23.1149 35.1849 24.9367 34.378 26.6328C33.5711 28.2976 32.4505 29.6639 31.0161 30.7318L37.7399 43.0289H27.8783L22.275 32.7578H19.0028V43.0289H10.2617ZM19.0028 24.7482H24.5163C25.0542 24.7482 25.5473 24.4341 25.9956 23.8059C26.4737 23.1777 26.7128 22.2982 26.7128 21.1675C26.7128 20.0053 26.4438 19.1258 25.9059 18.529C25.368 17.9008 24.8301 17.5867 24.2922 17.5867H19.0028V24.7482Z" fill="#211A1D"/>
                        <path d="M13.8455 36.6962V13.7588H12.0534L1.89844 26.4223V28.8117H25.7925" stroke="url(#paint0_linear_1_4272)" strokeWidth="3"/>
                        <path d="M54.1307 12.3018H57.3277C58.5989 12.3018 59.5594 12.5264 60.2093 12.9756C60.8593 13.4248 61.1842 14.2228 61.1842 15.3698C61.1842 16.1439 61.0839 16.7604 60.8832 17.2192C60.6824 17.6779 60.3097 18.0363 59.7649 18.2944L61.3563 23.9143H58.704L57.4281 18.7102H56.6969V23.9143H54.1307V12.3018ZM57.4137 17.2335C57.9298 17.2335 58.2883 17.0997 58.489 16.8321C58.6992 16.5549 58.8044 16.1439 58.8044 15.5991C58.8044 15.0735 58.7088 14.6816 58.5176 14.4236C58.3265 14.1559 57.9967 14.0221 57.5284 14.0221H56.6969V17.2335H57.4137Z" fill="#A9D4FF"/>
                        <path d="M65.5943 12.3018H70.8127V14.0508H68.1605V16.9324H70.1819V18.7102H68.1605V22.1796H70.8414V23.9143H65.5943V12.3018Z" fill="#A9D4FF"/>
                        <path d="M74.8737 12.3018H76.6801L79.06 17.893V12.3018H81.1818V23.9143H79.4471L77.0672 17.893V23.9143H74.8737V12.3018Z" fill="#A9D4FF"/>
                        <path d="M86.8239 14.2085H85.0748V12.3018H91.1391V14.2085H89.4044V23.9143H86.8239V14.2085Z" fill="#A9D4FF"/>
                        <path d="M57.1987 35.6415H53.6289V33.8781L56.6539 26.6382H59.4352V33.8638H60.5104V35.6415H59.4352V38.2508H57.1987V35.6415ZM57.1987 33.8638V29.0324L55.4496 33.8638H57.1987Z" fill="#A9D4FF"/>
                        <path d="M64.5162 26.6382H67.4552C68.4587 26.6382 69.2425 26.7625 69.8064 27.011C70.3703 27.2595 70.7669 27.6513 70.9963 28.1866C71.2352 28.7122 71.3547 29.4195 71.3547 30.3084V34.5233C71.3547 35.4217 71.2352 36.1385 70.9963 36.6737C70.7669 37.209 70.3703 37.6056 69.8064 37.8637C69.252 38.1217 68.4779 38.2508 67.4839 38.2508H64.5162V26.6382ZM67.4839 36.473C67.8566 36.473 68.129 36.4205 68.301 36.3153C68.4826 36.2006 68.5973 36.0429 68.6451 35.8422C68.6929 35.632 68.7168 35.3261 68.7168 34.9247V29.8639C68.7168 29.4912 68.6881 29.2092 68.6308 29.0181C68.583 28.8174 68.4683 28.6692 68.2867 28.5736C68.1147 28.4781 67.8423 28.4303 67.4695 28.4303H67.0824V36.473H67.4839Z" fill="#A9D4FF"/>
                        <path d="M77.2501 26.6382H80.1748L82.3396 38.2508H79.9741L79.587 35.7992H77.8809L77.4795 38.2508H75.0567L77.2501 26.6382ZM79.3433 34.2652L78.7268 29.7349L78.1103 34.2652H79.3433Z" fill="#A9D4FF"/>
                        <path d="M87.2676 33.5054L85.0598 26.6382H87.4827L88.5866 30.3084L89.5758 26.6382H91.8983L89.7335 33.5054V38.2508H87.2676V33.5054Z" fill="#A9D4FF"/>
                        <defs>
                          <linearGradient id="paint0_linear_1_4272" x1="15.6375" y1="28.0953" x2="27.5846" y2="28.0953" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="#211A1D" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h2 className="py-[9px] px-5 border-[2px] border-white border-solid rounded-3xl cursor-pointer">Заявка на подбор</h2>
                    <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="0.875" y="0.379883" width="5" height="5" fill="#FFDF42"/>
                        <rect x="20.875" y="0.379883" width="5" height="5" fill="#FFDF42"/>
                        <rect x="10.875" y="10.3799" width="5" height="5" fill="#FFDF42"/>
                        <rect x="0.875" y="20.3799" width="5" height="5" fill="#FFDF42"/>
                        <rect x="20.875" y="20.3799" width="5" height="5" fill="#FFDF42"/>
                      </svg>
                    </div>
            </div>
            <div className="mt-[31px] flex flex-col gap-10 lg:flex-row lg:absolute lg:ml-[-530px] lg:mt-0">
              <h2 className="navbar text-[#ffdf42] lg:text-[16px]">Квартиры</h2>
              <h2 className="navbar2 lg:text-[16px]">Коттеджи</h2>
              <h2 className="navbar2  lg:text-[16px]">Аренда авто</h2>
              <h2 className="navbar2 lg:text-[16px]">Блог</h2>
              <h2 className="navbar2 lg:text-[16px]">Контакты</h2>
            </div>
            <div className="flex justify-center border-[2px]  border-[#ffdf42] h-[50px] cursor-pointer w-[260px] gap-[19px] rounded-full mx-auto items-center mt-[50px] lg:m-0 ">
              <div className="bg-[#FFDF42] w-[34px] h-[34px] rounded-full flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.875 2.37988V22.3799M1.875 12.3799H21.875" stroke="#211A1D" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
              </div>
              <h3>Добавить объявление</h3>
            </div>
              <div className="lg:flex lg:flex-col block">
                <h4 className="hidden lg:block">+375 (29) 899-98-89</h4>
                <div className="flex justify-around mt-9 mb-[69px] lg:mt-0 lg:mb-0">
                  <Image src="/tel.svg" height={40} width={40} alt=""  className="lg:hidden"/>
                  <Image src="/next.svg" height={40} width={40} alt="" />
                  <Image src="/vercel.svg" height={40} width={40} alt="" />
                  <Image src="/tg.svg" height={40} width={40} alt="" />
                  <Image src="/sms.svg" height={40} width={40} alt="" />
                </div>
              </div>
              <div className="flex px-7 pb-[31px] gap-[17px] lg:hidden">
              <Image src="/lg.svg" height={38} width={69} alt="cv"/>
              <p className="heder_p">Сервис поиска квартир, домов и аренды авто по привлекательным ценам</p>
              </div>

      </header>
      <div className="hidden lg:block w-full">
                  <Image src="/bgurl.png"  width={1000} height={333} className="w-full block absolute z-[0] h-[333px]" alt="" />
                <div className="z-20 relative w-[1170px] mx-auto pt-[61px]">
                  <div className="flex justify-between">
                    <div className="flex gap-[30px]">
                      <h2 className="divh2">Поиск квартир</h2>
                        <select name="" id="" className="bg-[#ff000000]">
                        <option value="" className="bg-none">на сутки</option>
                        </select>
                    </div>
                    <div className="flex gap-[87px]">
                      <div className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                        <path d="M17.8984 3.68359H3.89844C2.79387 3.68359 1.89844 4.57902 1.89844 5.68359V19.6836C1.89844 20.7882 2.79387 21.6836 3.89844 21.6836H17.8984C19.003 21.6836 19.8984 20.7882 19.8984 19.6836V5.68359C19.8984 4.57902 19.003 3.68359 17.8984 3.68359Z" stroke="#FFDF42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.8984 1.68359V5.68359" stroke="#FFDF42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.89844 1.68359V5.68359" stroke="#FFDF42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.89844 9.68359H19.8984" stroke="#FFDF42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                        <h3 className="hh">Выбрать даты</h3>
                      </div>
                      <div className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                        <path d="M7.98177 0.683594C4.076 0.683594 0.898438 3.93289 0.898438 7.92681C0.898438 12.8834 7.23733 20.1599 7.50721 20.4673C7.76071 20.756 8.20329 20.7555 8.45633 20.4673C8.72621 20.1599 15.0651 12.8834 15.0651 7.92681C15.065 3.93289 11.8875 0.683594 7.98177 0.683594ZM7.98177 11.5711C6.01668 11.5711 4.41801 9.93626 4.41801 7.92681C4.41801 5.91735 6.01672 4.28258 7.98177 4.28258C9.94682 4.28258 11.5455 5.91739 11.5455 7.92685C11.5455 9.9363 9.94682 11.5711 7.98177 11.5711Z" fill="#FFDF42"/>
                      </svg>
                        <h3 className="hh">Ваш регион Минск</h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[1170px] bg-white h-[60px] items-center rounded-full pl-[26px] mt-[19px] justify-between">
                      <h2 className="hx">Цена:</h2>
                      <p className="px">0 — 1500</p>
                      <select name="" id="">
                        <option value="">BYN</option>
                      </select>
                      <h2 className="hx">Тип жилья:</h2>
                      <select name="" id="" className="px">
                        <option value="" >квартира-студия</option>
                      </select>
                      <h2 className="hx">Кол-во комнат:</h2>
                      <button className="w-[30px] h-[30px] border-solid border-[2px] border-[#ffdf42] bg-[#ffdf42]">1</button>
                      <button className="w-[30px] h-[30px] border-solid border-[2px] border-[#ffdf42]">2</button>
                      <button className="w-[30px] h-[30px] border-solid border-[2px] border-[#ffdf42]">3</button>
                      <button className="w-[30px] h-[30px] border-solid border-[2px] border-[#ffdf42]">4</button>
                      <button className="w-[30px] h-[30px] border-solid border-[2px] border-[#ffdf42]">5</button>
                      <button className="h-full px-[81px] bg-[#FFDF42] rounded-full">ПОИСК</button>
                  </div>
                  <div className="flex gap-[60px] mt-3">
                      <h2 className="hh">+ Район</h2>
                      <h2 className="hh">+ Улица</h2>
                      <h2 className="hh">+ Метро</h2>
                      <h2 className="hh">+ Удобства</h2>
                      <h2 className="hh">+ Спальные места</h2>
                  </div>
                  <div className=" mt-[70px] pb-8 text-center">
                    <p className="hh">Найдено результатов: 285</p>
                  </div>
                </div>
                

              </div>


      <main className="pt-[22px]">
        <div className="lg:w-[1240px]">

          <div>

            <h2 className="mainh">Квартира на сутки в Минске</h2>

            <div className="flex mt-[9px] gap-[11px] justify-center">
              <p>24.10.2019-05.11.2019</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                  <path d="M17.875 3.37988H3.875C2.77043 3.37988 1.875 4.27531 1.875 5.37988V19.3799C1.875 20.4845 2.77043 21.3799 3.875 21.3799H17.875C18.9796 21.3799 19.875 20.4845 19.875 19.3799V5.37988C19.875 4.27531 18.9796 3.37988 17.875 3.37988Z" stroke="#458BD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.875 1.37988V5.37988" stroke="#458BD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.875 1.37988V5.37988" stroke="#458BD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.875 9.37988H19.875" stroke="#458BD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

          </div>




          <div className="flex justify-around mt-7"> 
              <select name="aka" id="1" className="select">
                <option value="x">Сначала новые</option>
                <option value="2x">Сначала новые</option>
              </select>
              <div className="flex border-[2px] border-solid border-[#458BD1] w-[170px] h-[30px] justify-around rounded-full overflow-hidden">
                <h2 className="h-full bg-[#457bd1] w-[50%] text-center text-white">Список</h2>
                <h2 className="w-[50%] text-center text-[#458bd1]">Карта</h2>
              </div>
          </div>
            <p className="text-right pr-[15px] mt-5">Найдено результатов: 285</p>
        </div>
          <div className="lg:flex lg:flex-wrap lg:w-[1270px] lg:mx-auto lg:gap-[30px]">
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>
                    <Uylar/>

          </div>
      </main>

      <div className="flex py-[34px] justify-center items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
        <path d="M0.667893 6.67278C0.277369 7.0633 0.277369 7.69647 0.667893 8.08699L7.03185 14.451C7.42238 14.8415 8.05554 14.8415 8.44607 14.451C8.83659 14.0604 8.83659 13.4273 8.44607 13.0367L2.78921 7.37988L8.44607 1.72303C8.83659 1.3325 8.83659 0.699339 8.44607 0.308815C8.05554 -0.0817094 7.42238 -0.0817094 7.03185 0.308815L0.667893 6.67278ZM2.375 6.37988H1.375L1.375 8.37988H2.375V6.37988Z" fill="#458BD1"/>
      </svg>
      <h2 className="bg-[#FFDF42] w-[26px] h-[26px] rounded-full text-center">1</h2>
      <h2>2</h2>
      <h2>3</h2>
      <h2>4</h2>
      <h2>5</h2>
      <h2>....</h2>
      <h2 className="hidden lg:block">20</h2>
      <h2 className="lg:hidden">35</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
          <path d="M8.08211 6.67278C8.47263 7.0633 8.47263 7.69647 8.08211 8.08699L1.71815 14.451C1.32762 14.8415 0.694457 14.8415 0.303932 14.451C-0.0865922 14.0604 -0.0865922 13.4273 0.303932 13.0367L5.96079 7.37988L0.303932 1.72303C-0.0865922 1.3325 -0.0865922 0.699339 0.303932 0.308815C0.694457 -0.0817094 1.32762 -0.0817094 1.71815 0.308815L8.08211 6.67278ZM6.375 6.37988H7.375V8.37988H6.375V6.37988Z" fill="#458BD1"/>
        </svg>
      </div>

      <Foot/>

    </div>
  );
}
