import Image from "next/image"


function Uylar() {
  return (
    <div className="px-[15px] pb-[22px] mb-[30px] bg-white">

        <div>
            <div className="w-[95px] mt-[-10px] h-[70px] bg-white flex flex-col justify-center items-center absolute">
                <h2>9899BYN</h2>
                <p>за сутки</p>
            </div>
            <div className="absolute ml-[94px] mt-[-10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M10.875 10.3799L0.875 0.379883V10.3799H10.875Z" fill="#FED301"/>
                </svg>
            </div>
            <img src="/uy.png" alt="" className="w-full" />
        </div>
        <div className="px-[14px]">
        <h2 className="uyh2 mt-[6px] mb-[8px]">Ул. Петра Мстиславца, 24</h2>
        <div className="flex justify-between">
            <div className="flex flex-col gap1">
                <p className="uyp">Спальных мест: 2</p>
                <p className="uyp">Комнат: 1</p>
            </div>
            <div className="flex flex-col gap1 mb-[17px]">
                <p className="uyp">Маяк Минска</p>
                <p className="uyp">Восток (0,24km)</p>
            </div>

        </div>
        <div className="flex justify-between">
                <button className="border-[2px] uybtn border-solid border-[#458BD1] py-2 px-10 ">Связаться</button>
                <div className="flex gap-3">
                        <Image src="/vercel.svg" height={40} width={40} alt="" />
                        <Image src="/tg.svg" height={40} width={40} alt="" />
                        <Image src="/sms.svg" height={40} width={40} alt="" />
                </div>
            </div>

        </div>



    </div>
  )
}

export default Uylar