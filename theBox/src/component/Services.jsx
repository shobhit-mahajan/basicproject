import { MdConstruction } from "react-icons/md";
import { PiVectorThree } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { TbGeometry } from "react-icons/tb";
import { BsPlugFill } from "react-icons/bs";



export const Services = () => {
  return (
    <>
      <div className="contentservice text-center mt-10 md:mt-3 p-2 bg-[#F6F8F7]">
            <h2 className="text-[36px] font-semibold">Services</h2>
          <div className="cardservice grid md:grid-cols-3 p-3 justify-items-center justify-self-center self-center">

              <div className="cards_1 p-3 m-3  w-[271px] h-[181px] bg-white text-blue-600 flex flex-col justify-center items-center divide-x hover:shadow-2xl">
              <MdConstruction className="w-[40px] h-[40px]"/>
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">construction</h3>
              </div>

              <div className="cards_2 p-3 w-[271px] h-[181px] bg-blue-600 text-white flex flex-col justify-center items-center hover:shadow-2xl">
              <PiVectorThree className="w-[40px] h-[40px]"/>
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">Renovation</h3>
              </div>

              <div className="cards_3 p-3 w-[271px] h-[181px] bg-white text-blue-600 flex flex-col justify-center items-center hover:shadow-2xl">
              <FaHandsHelping className="w-[40px] h-[40px]"/>
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">Consultation</h3>
              </div>

              <div className="cards_4 p-3 w-[271px] h-[181px] bg-blue-600 text-white flex flex-col justify-center items-center hover:shadow-2xl">
              <FaSuitcase className="w-[40px] h-[40px]" />
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">Repairing Services</h3>
              </div>

              <div className="cards_5 p-3 w-[271px] h-[181px] bg-white text-blue-600 flex flex-col justify-center items-center hover:shadow-2xl">
              <TbGeometry className="w-[40px] h-[40px]"/>
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">Architecutre</h3>
              </div>

              <div className="cards_6 p-3 w-[271px] h-[181px] bg-blue-600 text-white flex flex-col justify-center items-center hover:shadow-2xl">
              <BsPlugFill className="w-[40px] h-[40px]"/>
              <hr className="w-[60px] h-[2px] bg-slate-400"/>
              <h3 className="text-[20px]">Electric</h3>
              </div>

          </div>
      </div>
    </>
  )
}
