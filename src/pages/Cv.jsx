import arrow from "../assets/arrow.svg";
import X from "../assets/x.svg";
import Resume from "../components/Resume";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../config/ROUTES";
import { AppContext } from "../context/AppContext";
import { resivedResumeKey } from "../config/localstorageKeys";

function Cv() {
  const cvFromApi = JSON.parse(localStorage.getItem(resivedResumeKey));
  const [showCongrats, setShowCongrats] = useState(true);
  const { personalInformation, educationInformation, experienceInformation } =
    useContext(AppContext);
  return (
    <>
      <Link to={`${ROUTES.GETSTARTED}`}>
        <img
          src={arrow}
          alt="arrow"
          className="absolute top-[45px] left-[48px] p-3"
        />
      </Link>
      {showCongrats && (
        <div className="absolute right-[70px] top-[54px] h-[167px] w-[427px] px-8 pt-10 shadow-custom-shadow">
          <img
            src={X}
            alt="X"
            className="absolute right-[12px] top-[18px] p-4"
            onClick={() => {
              setShowCongrats(false);
            }}
          />
          <h1 className="text-du text-main-black">
            რეზიუმე წარმატებით გაიგზავნა 🎉
          </h1>
        </div>
      )}
      {console.log(cvFromApi, "test")}
      <div className="border-[1px] border-black">
        <Resume
          name={cvFromApi.name}
          surname={cvFromApi.surname}
          image={cvFromApi.image}
          email={cvFromApi.email}
          mobNumber={cvFromApi.phone_number}
          aboutMe={cvFromApi.about_me}
          experience={cvFromApi.experiences[0]}
          education={cvFromApi.educations[0]}
          border={true}
          marginT={true}
          marginB={true}
        />
      </div>
    </>
  );
}

export default Cv;
