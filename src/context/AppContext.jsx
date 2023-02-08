import { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [personalInformation, setPersonalInformation] = useState({});
  const [experienceInformation, setExperienceInformation] = useState([]);
  const [educationInformation, setEducationInformation] = useState([]);

  return (
    <AppContext.Provider
      value={{
        personalInformation,
        setPersonalInformation,
        experienceInformation,
        setExperienceInformation,
        educationInformation,
        setEducationInformation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
