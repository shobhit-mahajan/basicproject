import aboutimg from "../assets/aboutimg.jpeg"
export const About = () => {
  return (
    <>
      <div className="imgcontent overflow-hidden relative">
          <div className="image relative left-[10px] md:left-[114px]">
            <img src={aboutimg} className="w-[350px] h-[429px] md:w-[902px] md:h-[629px]"></img>
          </div>

          <div className="aboutsec  absolute w-[200px] h-[429px] md:w-[488px] md:h-[450px] top-[30px] md:top-[146px] left-[250px] md:left-[840px] p-8 bg-blue-800 text-white">
            <h3 className="md:text-[36px]">About us</h3>
            <p className="text-sm pt-1 md:pt-12">For more than 30 years we have been delivering world-class construction and <br />  we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
            <div className="btns absolute bottom-12">

            <button className="bg-white text-black px-3 p-1 hover:bg-slate-200">More on our History</button>
            </div>
          </div>
      </div>
    </>
  )
}
