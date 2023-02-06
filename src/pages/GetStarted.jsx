import Logo from "../assets/LOGO.svg";
import Stamp from "../assets/STAMP.svg";

function GetStarted() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center px-[70px] pt-[25px] text-center "
      style={{ backgroundImage: "url('/assets/BG-01.png')" }}
    >
      <img src={Logo} alt="logo" className=" mb-[26px]" />
      <div className=" border-b-2 border-solid border-black"></div>
      <img
        src={Stamp}
        alt="stamp"
        className=" absolute top-[473px] right-[545px]"
      />
      <button className="mt-[424px] rounded-[8px] bg-main-black py-[18px] px-[126px] text-gb font-medium text-white">
        რეზიუმეს დამატება
      </button>
    </section>
  );
}

export default GetStarted;
