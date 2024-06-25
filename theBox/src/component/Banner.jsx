import bannerimg from "../assets/banner.jpeg";
export const Banner = () => {
  const myStyle = {
    backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ) , url('${bannerimg}')`,
    height: "300px",
    width:"100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    filter:"grayscale(1)",
    objectFit:"fill"
};
  return (
    <>
      <div className="mt-24 overflow-hidden" style={myStyle}>
        <div className="bannercontent grid grid-cols-2 gap-4  place-items-center mt-28 text-white ">
          <div className="bannerleft">

          <h2 className="font-black md:text-[26px]">Free Consultation with Exceptional Quality</h2>
          <p>Just one call away <a href="#" className="underline underline-offset-1">+84 1102 2703</a></p>
          </div>
          <div className="bannerright">
              <button className="border-2 px-2 py-2 md:px-6 md:py-2">Get your Consultation</button>
          </div>
        </div>
          
      </div>
    </>
  )
}
