import image from "../assets/LOGO.svg";
import arrow from "../assets/arrow.svg";
import X from "../assets/x.svg";
import Resume from "../components/Resume";

function Cv() {
  return (
    <>
      <button className="absolute top-[47px] left-[72px] flex h-4 w-[10px] p-6">
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-4 left-5 h-4 w-[10px] "
        />
      </button>
      <div className="absolute right-[70px] top-[54px] h-[167px] w-[427px] px-8 pt-10 shadow-custom-shadow">
        <img src={X} alt="X" className="absolute right-[12px] top-[18px]" />
        <h1 className="text-du text-main-black">
          რეზიუმე წარმატებით გაიგზავნა 🎉
        </h1>
      </div>
      <div className="border-[1px] border-black">
        <Resume
          name={"ქრისტეფორე"}
          surname={"მგალობლიშვილი"}
          image={image}
          email={"mmeesdssnikko@agruni.ge"}
          mobNumber={"50055443443"}
          aboutMe={
            "asfaffasfasasfaffasfasasfaff asfasasfaff asfasasfaffasfasasfaffasf asasfaffasf asasfaffasfasasfa ffasfasasfa ffasfasas faff asfasasfaffas fasasfaffa sfasasfaff asfasasfaff asfasasfaf fasfasasfaff asfasasfa ffasfasasfa ffasfas"
          }
          position={"მერძევე მთავარი პროფესორი"}
          company={"სახლშო"}
          workDateFrom={"22-244-424"}
          workDateTo={"22-244-424"}
          experience={
            "Experienced Javascript Native Developer with 5 years in tდსდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდსდასდა ასფავ ასფას,დსა დს,ლვასფ,ას,ფლაასდაფევსდფაწეფვრბფსდაეფედფერვსდფ"
          }
          school={"ილია "}
          status={"სდსდ"}
          schoolDate={"212333231"}
          aboutEducation={
            "erienced Javascript Native Developer with 5 years in tდსდდდდდდდ დდდდდდდდდდ დდდდდდდდდ დდდდდდდდდდდ დდდდდდდდსდასდა ასფავ ასფას,დსა დს,ლვასფ,ას,"
          }
          experiences={[]}
          educations={[]}
          border={true}
          marginT={true}
          marginB={true}
        />
      </div>
    </>
  );
}

export default Cv;
