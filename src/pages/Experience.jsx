import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ROUTES from "../config/ROUTES";
import Resume from "../components/Resume";
import ExperienceForm from "../components/ExperienceForm";
import arrow from "../assets/arrow.svg";
import { increaseFormsArray } from "../functions/increaseFormsArray";
import { experienceFormsIdArrKey } from "../config/localstorageKeys";
import { clearAllData } from "../functions/clearAllData";
function Experience() {
  const navigate = useNavigate();
  const { personalInformation, educationInformation } = useContext(AppContext);
  const [formsArrId, setFormsArrId] = useState([1]);
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem(experienceFormsIdArrKey));
    ids !== null && setFormsArrId(ids);
  }, []);

  useEffect(() => {
    localStorage.setItem(experienceFormsIdArrKey, JSON.stringify(formsArrId));
  }, [formsArrId]);

  return (
    <section className="flex ">
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          onClick={clearAllData}
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] z-40 p-3"
        />
      </Link>
      <section className="relative  min-w-[1098px] bg-main-bluelight px-[150px] pt-[47px]">
        <div className="mb-[50px] flex justify-between border-b-[1px] border-black pb-3">
          <h1 className="text-h17">გამოცდილება</h1>
          <h1 className="text-gb1">2/3</h1>
        </div>
        <div>
          {formsArrId.map((id) => {
            return <ExperienceForm id={id} key={id} />;
          })}
          <button
            className="block rounded-[4px] bg-main-blue2 py-[14px] px-5 text-ne  text-white"
            onClick={(e) => {
              e.preventDefault();
              increaseFormsArray(formsArrId, setFormsArrId);
            }}
          >
            მეტი გამოცდილების დამატება
          </button>

          <div className="mt-[115px] pb-10">
            <button className="float-right rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white">
              შემდეგი
            </button>
            <button
              className="rounded-[4px] bg-main-purple py-[14px] px-10 text-ne text-white"
              onClick={() => {
                navigate(`/${ROUTES.PERSONAL}`);
              }}
            >
              უკან
            </button>
          </div>
        </div>
      </section>
      <Resume
        name={personalInformation.name}
        surname={personalInformation.surname}
        image={personalInformation.image}
        email={personalInformation.email}
        mobNumber={personalInformation.mobile}
        aboutMe={personalInformation.message}
        experiences={[]}
        educations={educationInformation}
        border={false}
      />
    </section>
  );
}

export default Experience;
