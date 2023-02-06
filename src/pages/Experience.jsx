import image from "../assets/STAMP.svg";
import Resume from "../components/Resume";
import InputC from "../components/InputC";
function Experience() {
  return (
    <section className="flex">
      <section className=" h-screen min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">გამოცდილება</h1>
          <h1 className="text-gb1">2/3</h1>
        </div>
        <form className="">
          <InputC
            divClass="mb-[30px]"
            labelText="თანამდებობა"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            id="position"
            pText="მინიმუმ 2 სიმბოლო"
            pClass=""
            inpClass=""
          />
          <InputC
            divClass="mb-[30px]"
            labelText="დამსაქმებელი"
            placeholder="დამსაქმებელი"
            id="employer"
            pText="მინიმუმ 2 სიმბოლო"
            pClass=""
            inpClass=""
          />
          <div className="mb-8 flex w-full justify-between">
            <InputC
              divClass="mb-8 mr-[56px]"
              labelText="დაწყების რიცხვი"
              placeholder="anzorr666@redberry.ge"
              id="email"
              inputType="date"
              pClass=""
              inpClass=""
            />
            <InputC
              divClass="mb-8"
              labelText="დამთავრების რიცხვი"
              placeholder="+995 551 12 34 56"
              id="mobile"
              inputType="date"
              pClass=""
              inpClass=""
            />
          </div>

          <div className="mb-[45px] flex flex-col border-b-[1px] border-main-gray2 pb-[58px]">
            <label className="mb-2 text-lb" htmlFor="about-job">
              აღწერა
            </label>
            <textarea
              className="h-[103px] w-full rounded-[4px] py-[13px] px-4 text-lbp"
              name="about-job"
              id="about-job"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ></textarea>
          </div>
          <button className="block rounded-[4px] bg-main-blue2 py-[14px] px-5 text-ne  text-white">
            მეტი გამოცდილების დამატება
          </button>
          <div className="mt-[115px]">
            <button
              className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              type="submit"
            >
              შემდეგი
            </button>
            <button
              className=" rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              type="submit"
            >
              უკან
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
          "ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ. "
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
        border={false}
      />
    </section>
  );
}

export default Experience;
