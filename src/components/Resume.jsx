import cvLogo from "../assets/cv-logo.svg";
import snail from "../assets/snail.svg";
import tel from "../assets/tel.svg";
function Resume({
  image,
  name,
  surname,
  email,
  mobNumber,
  aboutMe,
  experiences,
  educations,
  border,
  marginT,
  marginB,
}) {
  return (
    <section
      className={`relative mx-auto min-h-[1080px] max-w-[822px] bg-white pb-32 pl-[80px] pr-[75px]
      ${marginT && "mt-[54px]"}   
      ${marginB && "mb-[100px]"}   
      ${border && " border-[1px] border-black"}`}
    >
      <div className="flex border-b-[1px] border-main-gray">
        <div className="mt-[68px] mb-5 w-[430px]">
          <h1 className="mb-4 text-ch1 text-main-red">
            {name} {surname}
          </h1>
          <div className="mb-[10px] flex">
            <img src={snail} alt="snail" className="mr-3" />
            <h6 className=" text-cp text-main-black">{email}</h6>
          </div>
          <div className="mb-[34px] flex">
            <img src={tel} alt="tel" className="mr-3" />
            <h6 className="text-cp text-main-black">{mobNumber}</h6>
          </div>
          <h2 className="mb-4 text-ch2 text-main-red">ჩემ შესახებ</h2>
          <p className="text-base">{aboutMe}</p>
        </div>
        <img
          src={image}
          alt="avatar"
          className="mb-[47px] mt-12 h-[246px] w-[246px] rounded-full"
        />
      </div>
      <div
        className={`border-t-[1px] border-main-gray pt-6 ${
          experiences.length === 0 && "hidden"
        }`}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">გამოცდილება</h1>
        {experiences.map((A, i) => {
          return (
            <div key={i}>
              <div className="mb-[7px] flex text-ne text-main-black">
                <h2 className="mr-2">
                  {A.position}
                  {A.position && A.company && ","}
                </h2>
                <h2>{A.company}</h2>
              </div>
              <h2
                className="mb-4 text-main-date"
                style={{ fontStyle: "italic" }}
              >
                {A.workDateFrom} {A.workDateFrom && A.workDateTo && "-"}{" "}
                {A.workDateTo}
              </h2>
              <p className="mb-8 text-cp2">{A.aboutExperience}</p>
            </div>
          );
        })}
      </div>
      <div
        className={`relative border-t-[1px] border-main-gray pt-6 ${
          educations.length === 0 && "hidden"
        } `}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">განათლება</h1>
        {educations.map((B, i) => {
          return (
            <div key={i} className="mb-6">
              <div className="flex">
                <h2 className="mr-2">
                  {B.school} {B.school && B.status && ","}
                </h2>
                <h2>{B.status}</h2>
              </div>
              <h2
                className="mb-4 text-main-date"
                style={{ fontStyle: "italic" }}
              >
                {B.schoolDate}
              </h2>
              <p className="text-cp2">{B.aboutEducation}</p>
            </div>
          );
        })}
      </div>
      <img src={cvLogo} alt="logo" className="absolute bottom-[44px]" />
    </section>
  );
}

export default Resume;
