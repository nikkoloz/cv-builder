import { createContext, useEffect, useState } from "react";
import { getOptions } from "../http/getOptions";
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [personalInformation, setPersonalInformation] = useState({});
  const [experienceInformation, setExperienceInformation] = useState([]);
  const [educationInformation, setEducationInformation] = useState([]);
  const [options, setOptions] = useState([]);
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
