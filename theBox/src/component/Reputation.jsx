import { TfiHeadphoneAlt } from "react-icons/tfi";
export const Reputation = () => {
  return (
    <>
      <div className="middle text-center h-4/5 m-5">
          <h3 className="text-[36px] font-semibold">Our Reputation</h3>
          <div className="cards_sec   flex flex-col md:flex-row flex-wrap justify-center items-center mt-8">

            <div className="card_1 border-2 border-gray-300 p-3 m-3 w-[292px] h-[197px] hover:shadow-xl hover:text-blue-800">
            <TfiHeadphoneAlt className="text-[40px] text-cyan-700"/>
            <h4 className="text-[20px]"> Best Services</h4>
            <p className="text-[16px] pt-3">Nullam senectus porttitor in eget.Eget rutrum leo interdum</p>
            </div>

            <div className="card_2 border-2 border-gray-300 p-3 m-3 w-[292px] h-[197px] hover:shadow-xl hover:text-blue-800">
            <TfiHeadphoneAlt className="text-[40px] text-cyan-700"/>
            <h4 className="text-[20px]"> Best Services</h4>
            <p className="text-[16px] pt-3">Nullam senectus porttitor in eget.Eget rutrum leo interdum</p>
            </div>
      

            <div className="card_3 border-2 border-gray-300 p-3 m-3 w-[292px] h-[197px] hover:shadow-xl hover:text-blue-800">
            <TfiHeadphoneAlt className="text-[40px] text-cyan-700"/>
            <h4 className="text-[20px]"> Best Services</h4>
            <p className="text-[16px] pt-3">Nullam senectus porttitor in eget.Eget rutrum leo interdum</p>
            </div>
            
          </div>
      </div>
    </>
  )
}
