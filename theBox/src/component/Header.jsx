import bgimg from "../assets/headerimg.jpeg"
const Header = () => {
  return (
    <>
      <div className="bg overflow-hidden relative">
        <img className="w-full h-[646px] bg-white-to-transparent relative bg-fixed" src={bgimg}></img>
      <h1 className="heading  absolute top-[190px] left-[112px] text-[50px] md:text-[72px] sm:text-center ">Building things <span className="block">is our mission.</span></h1>
      <div className="card w-full md:w-[416px] h-[250px] absolute md:left-[1108px] top-[490px] bg-sky-800 text-white text-center ">
            <h4>Feature Project</h4>
            <p className="text-[22px]">The National university of Architecture</p>
            <div className="btn pointer my-12 px-2">
             <button className="w-[48%] mx-1 bg-slate-600 ">Next</button>
            <button className="w-[48%] mx-1 bg-slate-600">Back</button>
            </div>
      </div>
      </div>
    </>
  )
}

export default Header