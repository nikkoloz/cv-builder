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
  position,
  company,
  workDateFrom,
  workDateTo,
  experience,
  school,
  status,
  schoolDate,
  aboutEducation,
  border,
  marginT,
  marginB,

}) {
  return (
    <section
      className={`relative mx-auto min-h-[1080px] max-w-[822px] pb-32 pl-[80px] pr-[75px] 
      ${marginT && "mt-[54px]"}   
      ${marginB && "mb-[100px]"}   
      ${border && " border-[1px] border-black"}`}
    >
      <div className="flex border-b-[1px] border-main-gray">
        <div className="mt-[68px] mb-5">
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
          <p className="">{aboutMe}</p>
        </div>
        <img
          src={image}
          alt="avatar"
          className=" mt-12 h-[246px] w-[246px] rounded-full bg-black"
        />
      </div>

      <div
        className={` border-t-[1px] border-main-gray pt-6 ${
          !(position || company || workDateFrom || workDateTo || experience) &&
          "hidden"
        }`}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">გამოცდილება</h1>
        <div className="mb-[7px] flex text-ne text-main-black">
          <h2 className="mr-2">
            {position}
            {position && company && ","}
          </h2>
          <h2>{company}</h2>
        </div>
        <h2 className="mb-4 text-main-date" style={{ fontStyle: "italic" }}>
          {workDateFrom} {workDateFrom && workDateTo && "-"} {workDateTo}
        </h2>
        <p className="mb-8 text-cp2">{experience}</p>
      </div>

      <div
        className={`border-t-[1px] border-main-gray pt-6 ${
          !(school || status || schoolDate || aboutEducation) && "hidden"
        } `}
      >
        <h1 className="mb-4 text-ch2 text-main-red ">განათლება</h1>
        <div className="flex">
          <h2 className="mr-2">
            {school} {school && status && ","}
          </h2>
          <h2>{status}</h2>
        </div>
        <h2 className="mb-4 text-main-date" style={{ fontStyle: "italic" }}>
          {schoolDate}
        </h2>
        <p className="text-cp2">{aboutEducation}</p>
      </div>

      <img src={cvLogo} alt="logo" className="absolute bottom-[44px]" />
    </section>
  );
}

export default Resume;
