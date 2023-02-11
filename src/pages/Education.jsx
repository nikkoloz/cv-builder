import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EducationForm from "../components/EducationForm";
import ROUTES from "../config/ROUTES";
import Resume from "../components/Resume";
import image from "../assets/STAMP.svg";
import arrow from "../assets/arrow.svg";
import { AppContext } from "../context/AppContext";
import { increaseFormsArray } from "../functions/increaseFormsArray";
import { educationFormsIdArrKey } from "../config/localstorageKeys";
import { clearAllData } from "../functions/clearAllData";
function Education() {
  const { options } = useContext(AppContext);
  const [formsArrId, setFormsArrId] = useState([1]);
  const navigate = useNavigate();
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem(educationFormsIdArrKey));
    ids !== null && setFormsArrId(ids);
  }, []);
  useEffect(() => {
    localStorage.setItem(educationFormsIdArrKey, JSON.stringify(formsArrId));
  }, [formsArrId]);
  return (
    <section className="flex ">
      <Link to={`/${ROUTES.GETSTARTED}`}>
        <img
          onClick={clearAllData}
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] z-40 p-3"
        />
      </Link>
      <section className="relative  min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">განათლება</h1>
          <h1 className="text-gb1">3/3</h1>
        </div>
        <div className="">
          {formsArrId.map((id) => {
            return <EducationForm options={options} id={id} key={id} />;
          })}
          <button
            className="block rounded-[4px] bg-main-blue2 py-[14px] px-5 text-ne  text-white"
            onClick={(e) => {
              e.preventDefault();
              increaseFormsArray(formsArrId, setFormsArrId);
            }}
          >
            სხვა სასწავლებლის დამატება
          </button>
          <div className="mt-[115px] pb-10 ">
            <button
              className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              onClick={() => {
                navigate(`${ROUTES.EXPERIENCE}`);
              }}
            >
              უკან
            </button>
            <button
              className=" rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              type="submit"
            >
              დასრულება
            </button>
          </div>
        </div>
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
