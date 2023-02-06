import image from "../assets/STAMP.svg";
import EducationForm from "../components/EducationForm";
import Resume from "../components/Resume";
import arrow from "../assets/arrow.svg";

function Education() {
  return (
    <section className="flex ">
      <button className="absolute top-[37px] left-[41px] z-40  rounded-full p-5">
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-[13px] left-[14px]"
        />
      </button>
      <section className="relative  min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">განათლება</h1>
          <h1 className="text-gb1">3/3</h1>
        </div>
        <form className="">
          <EducationForm />
          <EducationForm />
          <button className="block rounded-[4px] bg-main-blue2 py-[14px] px-5 text-ne  text-white">
            სხვა სასწავლებლის დამატება
          </button>
          <div className="mt-[115px] pb-10 ">
            <button
              className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              type="submit"
            >
              უკან
            </button>
            <button
              className=" rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              type="submit"
            >
              დასტულება
            </button>
          </div>
        </form>
      </section>
      <Resume
        name={"ქრისტეფორე"}
        surname={"მგალობლიშვილი"}
        image={image}
        email={"mmeesdssnikko@agruni.ge"}
        mobNumber={"50055443443"}
        aboutMe={
          "ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ."
        }
        experiences={[
          {
            position: "მერძევე მთავარი პროფესორი",
            company: "სახლშო",
            workDateFrom: "22-244-424",
            workDateTo: "22-244-424",
            aboutExperience:
              "Experienced Javascript Native Developer with 5 years in tდსდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდსდასდა ასფავ ასფას,დსა დს,ლვასფ,ას,ფლაასდაფევსდფაწეფვრბფსდაეფედფერვსდფ",
          },
        ]}
        educations={[
          {
            school: " პროფესორი",
            status: "სახლშო",
            schoolDate: "22-244-424",
            aboutEducation:
              "Experienced Javascript Native Developer with 5 years in tდსდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდდდდ დდდდდდდსდასდა ასფავ ასფას,დსა დს,ლვასფ,ას,ფლაასდაფევსდფაწეფვრბფსდაეფედფერვსდფ",
          },
        ]}
        border={false}
      />
    </section>
  );
}

export default Education;
