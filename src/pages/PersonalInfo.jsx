import image from "../../public/assets/STAMP.svg";
import Resume from "../components/Resume";
import InputC from "../components/InputC";
function PersonalInfo() {
  return (
    <section className="flex">
      <section className=" h-screen min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="">პირადი ინფო</h1>
          <h1 className="">1/3</h1>
        </div>
        <form className="">
          <div className="mb-[54px] flex w-full justify-between">
            <InputC
              divClass="mr-[56px]"
              labelText="სახელი"
              placeholder="ქრისტეფორე"
              id="name"
              pText="მინიმუმ 2 ასო, ქართული ასოები"
              pClass=""
              inpClass=""
            />
            <InputC
              divClass="mr-[56px]"
              labelText="გვარი"
              placeholder="მგალობლიშვილი"
              id="surname"
              pText="მინიმუმ 2 ასო, ქართული ასოები"
              pClass=""
              inpClass=""
            />
          </div>
          <div className="mb-[54px]">
            <div className="flex items-center">
              <h1 className="mr-5">პირადი ფოტოს ატვირთვა</h1>
              <label
                className="rounded-[4px] bg-main-blue1 py-1 px-5 text-white"
                htmlFor="image"
              >
                ატვირთვა
              </label>
              <input className=" hidden " type="file" id="image" name="image" />
            </div>
          </div>
          <div className="mb-[33px] flex flex-col">
            <label className="mb-2" htmlFor="message">
              ჩემ შესახებ (არასავალდებულო)
            </label>
            <textarea
              className="h-[103px] w-full rounded-[4px] py-[13px] px-4"
              name="message"
              id="message"
              placeholder="ზოგადი ინფო შენ შესახებ"
            ></textarea>
          </div>

          <InputC
            divClass="mb-8"
            labelText="მეილი"
            placeholder="anzorr666@redberry.ge"
            id="email"
            pText="უნდა მთავრდებოდეს @redberry.ge-ით"
            pClass=""
            inpClass=""
          />
          <InputC
            divClass="mb-[160px]"
            labelText="ტელეფონი"
            placeholder="+995 551 12 34 56"
            id="mobile"
            pText="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            pClass=""
            inpClass=""
          />
          <button
            className="float-right rounded-[4px] bg-main-purple py-[14px] px-10"
            type="submit"
          >
            Submit
          </button>
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
        border={true}
      />
    </section>
  );
}

export default PersonalInfo;
