import { createContext, useEffect, useState } from "react";
import { getOptions } from "../http/getOptions";
import {
  submittedPersonalInfoKey,
  submittedExperienceKey,
  submittedEducationKey,
} from "../config/localstorageKeys";
import { saveValuesToLocalStorage } from "../functions/valuesUpdatingF";
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [personalInformation, setPersonalInformation] = useState({});
  const [experienceInformation, setExperienceInformation] = useState([]);
  const [educationInformation, setEducationInformation] = useState([]);
  const [options, setOptions] = useState([]);
  // get on refresh from localstorage
  useEffect(() => {
    const submittedPer = localStorage.getItem(submittedPersonalInfoKey);
    const submittedExp = localStorage.getItem(submittedExperienceKey);
    const submittedEdu = localStorage.getItem(submittedEducationKey);
    if (submittedPer) {
      setPersonalInformation(JSON.parse(submittedPer));
    }
    if (submittedExp) {
      setExperienceInformation(JSON.parse(submittedExp));
    }
    if (submittedEdu) {
      setEducationInformation(JSON.parse(submittedEdu));
    }
  }, []);

  //set on change
  useEffect(() => {
    saveValuesToLocalStorage(personalInformation, submittedPersonalInfoKey);
  }, [personalInformation]);
  useEffect(() => {
    saveValuesToLocalStorage(experienceInformation, submittedExperienceKey);
  }, [experienceInformation]);
  useEffect(() => {
    saveValuesToLocalStorage(educationInformation, submittedEducationKey);
  }, [educationInformation]);
  //fetch otions
  useEffect(() => {
    getOptions(setOptions);
  }, []);
  return (
    <AppContext.Provider
      value={{
        personalInformation,
        setPersonalInformation,
        experienceInformation,
        setExperienceInformation,
        educationInformation,
        setEducationInformation,
        options,
        setOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
