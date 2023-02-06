import Logo from "../assets/LOGO.svg";
import Stamp from "../assets/STAMP.svg";
import bgimage from "../assets/bg.png";
function GetStarted() {
  return (
    <>
      <img src={bgimage} alt="bg" className="absolute z-0" />
      <section className="relative z-50 h-screen w-full px-[70px] pt-[25px] text-center ">
        <img src={Logo} alt="logo" className=" mb-[26px]" />
        <div className=" border-b-2 border-solid border-black"></div>
        <img
          src={Stamp}
          alt="stamp"
          className=" absolute top-[473px]  right-[545px] z-0"
        />
        <button className="relative z-40 mt-[424px] rounded-[8px] bg-main-black py-[18px] px-[126px] text-gb font-medium text-white">
          რეზიუმეს დამატება
        </button>
      </section>
    </>
  );
}

export default GetStarted;
